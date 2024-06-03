import { AxiosError } from "axios"
import { ADAAS_A_AUTH_Error_ConstructorParams } from "../types/ADAAS_A_AUTH_Error.types"

export class ADAAS_A_AUTH_Error extends Error {

    name!: string
    message!: string
    code!: string
    description!: string
    link?: string

    constructor(params: ADAAS_A_AUTH_Error_ConstructorParams | AxiosError | Error) {
        super(params.message);
        this.identifyInitializer(params);
    }


    protected identifyInitializer(err: ADAAS_A_AUTH_Error_ConstructorParams | AxiosError | Error): ADAAS_A_AUTH_Error {

        switch (true) {
            case err instanceof AxiosError:
                return this.fromAxios(err);

            case err instanceof Error:
                return this.fromError(err)


            default:
                return this.fromDefault(err)
        }
    }


    protected fromAxios(err: AxiosError<any>): ADAAS_A_AUTH_Error {
        this.name = err.name;
        this.code = err.code || 'ADAAS_A_AUTH_EXTERNAL_API_ERROR';
        this.description = err.response?.data?.description || 'External API Error...';

        return this;
    }

    protected fromDefault(err: ADAAS_A_AUTH_Error_ConstructorParams): ADAAS_A_AUTH_Error {
        this.name = err.name;
        this.description = err.description;
        this.code = err.code;
        this.link = err.link;

        return this;
    }

    protected fromError(err: Error): ADAAS_A_AUTH_Error {
        this.name = err.name;
        this.message = err.message;
        this.stack = err.stack;
        this.code = 'ADAAS_A_AUTH_INTERNAL_ERROR'
        this.description = 'Something wen\'t wrong...'

        return this;
    }


    toJSON(): ADAAS_A_AUTH_Error_ConstructorParams {
        return {
            name: this.name,
            message: this.message,
            description: this.description,
            code: this.code,
            link: this.link
        }
    }
}