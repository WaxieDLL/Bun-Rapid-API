import type { EndPointProps, MiddlewareProps } from "globaltypes"

export function Middleware({ request, response, next }: MiddlewareProps) {
    /*  response({message: "You can send response from middleware like that. (json)"}, {status: 500})
        response("Or like that (plain text)", {status: 401})                                                   */
    next();
}

export function POST({ request, response }: EndPointProps) {
    const res_headers = {
        "Some-Header-Stuff": "Obviously"
    }
    response({
        message: "POST Request",
        form_data: request.form_data
    }, { headers: { ...res_headers } });
}

export function GET({ request, response }: EndPointProps) {
    response({
        message: "GET Request",
        params: request.params
    });
}

export function PUT({ request, response }: EndPointProps) {
    response({
        message: "PUT Request"
    });
}