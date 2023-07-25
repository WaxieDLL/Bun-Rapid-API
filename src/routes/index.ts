import type { EndPointProps } from "globaltypes";
interface IndexResponse {
    message: string
}
export function GET({ request, response }: EndPointProps) {
    response(<IndexResponse>{
        message: "Hello, world!"
    });
}
