import { Method } from "axios";
import { A_AUTH_APIProvider } from "../A_AUTH_APIProvider.class";
import { A_AUTH_TYPES__IAuthenticator } from "../../types/A_AUTH_Authenticator.types";
import { A_AUTH_ContextClass } from "../A_AUTH_Context.class";
import { A_AUTH_TYPES__APIProviderRequestConfig } from "../../types/A_AUTH_APIProvider.types";
export declare class A_AUTH_ServerCommands_APIProvider<C extends A_AUTH_ContextClass> extends A_AUTH_APIProvider<C> {
    protected request<T, M>(method: Method, url: string, auth?: A_AUTH_TYPES__IAuthenticator, data?: any, params?: any, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<T>;
}
