import type { EndPointProps } from "globaltypes";

export function GET({ request, response }: EndPointProps) {
    let res = {
        message: "Done!",
        user: request.params.name,
        id: request.query.id,
        name: request.query.name
    }
    response(res)
}