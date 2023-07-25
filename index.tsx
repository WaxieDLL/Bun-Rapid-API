import type { EndPointProps, MiddlewareProps, RequestProps } from 'globaltypes';
const router = new Bun.FileSystemRouter({
    style: "nextjs",
    dir: "./src/routes/",
});
const server = Bun.serve({
    port: 8080,
    hostname: "127.0.0.1",
    async fetch(request) {
        const url = new URL(request.url);
        const matched = router.match(url.pathname);
        if (matched?.filePath) {
            const imported = await import(matched.filePath);
            if (!imported[request.method])
                return new Response(`Method Not Allowed: ${request.method}`, { status: 405 });

            const method_function = imported[request.method];

            const is_form_data = request.headers.has("Content-Type") && request.headers.get("Content-Type")?.startsWith("multipart/form-data") || request.headers.get("Content-Type")?.startsWith("application/x-www-form-urlencoded")
            const fd = request.method === "POST" && is_form_data ? await request.formData() : new FormData();

            let stored_response: Response | null = null;

            const response_function = (content: any, options?: ResponseInit | undefined) => {
                if (typeof (content) === "object") {
                    stored_response = Response.json(content, options);
                }
                else {
                    stored_response = new Response(content, options);
                }
            };

            const request_props: RequestProps = {
                params: Object.fromEntries(url.searchParams),
                form_data: fd,
                headers: request.headers,
                method: request.method,
                query: matched.query
            }

            const end_point_props: EndPointProps = {
                request: request_props,
                response: response_function,
            }
            if (imported["Middleware"]) {
                let next_called = false;
                const next_function = () => { next_called = true };
                const middleware_props: MiddlewareProps = {
                    request: request_props,
                    response: response_function,
                    next: next_function
                }
                imported["Middleware"](middleware_props);

                if (stored_response !== null)
                    return stored_response;

                if (next_called)
                    method_function(end_point_props);

                if (stored_response !== null)
                    return stored_response;

                return new Response(``, { status: 204 })
            }

            method_function(end_point_props);

            if (stored_response !== null)
                return stored_response;
        }
        return new Response(`Requested page not found.`, { status: 404 });
    },
});

console.log(`Server is running on http://${server.hostname}:${server.port}`);
