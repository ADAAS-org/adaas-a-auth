import { AxiosError } from "axios";
import { A_AUTH_TYPES__Error_ConstructorParams } from "../types/A_AUTH_Error.types";
export declare class A_AUTH_Error extends Error {
    name: string;
    message: string;
    code: string;
    description: string;
    serverCode?: number;
    link?: string;
    constructor(params: A_AUTH_TYPES__Error_ConstructorParams | AxiosError | Error);
    protected identifyInitializer(err: A_AUTH_TYPES__Error_ConstructorParams | AxiosError | Error): A_AUTH_Error;
    protected fromAxios(err: AxiosError<any>): A_AUTH_Error;
    protected fromDefault(err: A_AUTH_TYPES__Error_ConstructorParams): A_AUTH_Error;
    protected fromError(err: Error): A_AUTH_Error;
    toJSON(): A_AUTH_TYPES__Error_ConstructorParams;
}
