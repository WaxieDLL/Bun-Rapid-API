export interface RequestProps {
    readonly params?: any,
    readonly form_data?: FormData,
    readonly headers?: Headers,
    readonly method?: string,
    readonly query?: any
}

export interface MiddlewareProps {
    request: RequestProps,
    response: (content: any, options?: ResponseInit | undefined) => void,
    next: any
}

export interface EndPointProps {
    request: RequestProps,
    response: (content: any, options?: ResponseInit | undefined) => void,
}