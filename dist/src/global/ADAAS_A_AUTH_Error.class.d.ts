import { AxiosError } from "axios";
import { ADAAS_A_AUTH_Error_ConstructorParams } from "../types/ADAAS_A_AUTH_Error.types";
export declare class ADAAS_A_AUTH_Error extends Error {
    name: string;
    message: string;
    code: string;
    description: string;
    link?: string;
    constructor(params: ADAAS_A_AUTH_Error_ConstructorParams | AxiosError | Error);
    protected identifyInitializer(err: ADAAS_A_AUTH_Error_ConstructorParams | AxiosError | Error): ADAAS_A_AUTH_Error;
    protected fromAxios(err: AxiosError<any>): ADAAS_A_AUTH_Error;
    protected fromDefault(err: ADAAS_A_AUTH_Error_ConstructorParams): ADAAS_A_AUTH_Error;
    protected fromError(err: Error): ADAAS_A_AUTH_Error;
    toJSON(): ADAAS_A_AUTH_Error_ConstructorParams;
}
