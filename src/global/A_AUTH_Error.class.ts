import { AxiosError } from "axios"
import { A_AUTH_TYPES__Error_ConstructorParams } from "../types/A_AUTH_Error.types"

export class A_AUTH_Error extends Error {

    name!: string
    message!: string
    code!: string
    description!: string
    link?: string

    constructor(params: A_AUTH_TYPES__Error_ConstructorParams | AxiosError | Error) {
        super(params.message);
        this.identifyInitializer(params);
    }


    protected identifyInitializer(err: A_AUTH_TYPES__Error_ConstructorParams | AxiosError | Error): A_AUTH_Error {

        switch (true) {
            case err instanceof AxiosError:
                return this.fromAxios(err);

            case err instanceof Error:
                return this.fromError(err)


            default:
                return this.fromDefault(err)
        }
    }


    protected fromAxios(err: AxiosError<any>): A_AUTH_Error {
        this.name = err.name;
        this.code = err.code || 'A_AUTH_EXTERNAL_API_ERROR';
        this.description = err.response?.data?.description || 'External API Error...';

        return this;
    }

    protected fromDefault(err: A_AUTH_TYPES__Error_ConstructorParams): A_AUTH_Error {
        this.name = err.name;
        this.description = err.description;
        this.code = err.code;
        this.link = err.link;

        return this;
    }

    protected fromError(err: Error): A_AUTH_Error {
        this.name = err.name;
        this.message = err.message;
        this.stack = err.stack;
        this.code = 'A_AUTH_INTERNAL_ERROR'
        this.description = 'Something wen\'t wrong...'

        return this;
    }


    toJSON(): A_AUTH_TYPES__Error_ConstructorParams {
        return {
            name: this.name,
            message: this.message,
            description: this.description,
            code: this.code,
            link: this.link
        }
    }
}