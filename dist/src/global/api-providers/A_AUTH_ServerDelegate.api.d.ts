import { Method, ResponseType } from "axios";
import { A_AUTH_APIProvider } from "../A_AUTH_APIProvider.class";
import { A_AUTH_TYPES__IAuthenticator } from "../../types/A_AUTH_Authenticator.types";
import { A_AUTH_TYPES__APIProviderRequestConfig } from "../../types/A_AUTH_APIProvider.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
import { A_AUTH_ServerDelegateAuthenticator } from "../authenticator/A_AUTH_ServerDelegate.authenticator";
import { A_AUTH_ContextClass } from "../A_AUTH_Context.class";
export declare class A_AUTH_ServerDelegate_APIProvider<C extends A_AUTH_ContextClass> extends A_AUTH_APIProvider<C> {
    protected request<T, M>(method: Method, url: string, auth: A_AUTH_TYPES__IAuthenticator, data?: any, params?: any, responseType?: ResponseType, meta?: M): Promise<T>;
    protected post<T, M = any>(url: string, body: any, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<T>;
    protected get<T, M = any>(url: string, params: any, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<T>;
    protected put<T, M = any>(url: string, body: any, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<T>;
    protected delete<T, M = any>(url: string, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<T>;
    protected patch<T, M = any>(url: string, body: any, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<T>;
}
