import { AxiosRequestConfig } from "axios";
import { A_AUTH_TYPES__IAuthenticator } from "./A_AUTH_Authenticator.types";
export type A_AUTH_TYPES__APIProviderError = {
    name: string;
    code: string;
    description?: string;
    message: string;
};
export type A_AUTH_TYPES__APIProviderRequestConfig<T = any, A extends A_AUTH_TYPES__IAuthenticator = A_AUTH_TYPES__IAuthenticator> = {
    authenticator?: A;
    meta?: T;
    adaas?: {
        auth?: boolean;
    };
} & AxiosRequestConfig;
