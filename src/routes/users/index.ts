import type { EndPointProps } from "globaltypes";

export function GET({ request, response }: EndPointProps) {
    let res = {
        message: "Example page, you can do whatever you want to do, it's up to you 🤷🏻‍♂️"
    }
    response(res)
}