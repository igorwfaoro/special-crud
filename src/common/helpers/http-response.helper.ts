export interface ErrorResponse {
    statusCode: number;
    message: string;
    exception?: any;
}

export abstract class HttpResponseHelper {

    public static mapErrorResponse(error: any): ErrorResponse {

        const err: ErrorResponse = error.message ? {
            statusCode: error.statusCode || 500,
            message: error.message
        } : {
            statusCode: 400,
            message: "Something wrong 🙁..."
        };

        return err;
    }
}