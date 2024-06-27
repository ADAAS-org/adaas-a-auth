import { Method, ResponseType } from "axios";
import { A_AUTH_APIProvider } from "../A_AUTH_APIProvider.class";
import { A_AUTH_TYPES__IAuthenticator } from "../../types/A_AUTH_Authenticator.types";
import { A_AUTH_ContextClass } from "../A_AUTH_Context.class";
export declare class A_AUTH_AppInteractions_APIProvider<C extends A_AUTH_ContextClass> extends A_AUTH_APIProvider<C> {
    protected request<T, M>(method: Method, url: string, auth?: A_AUTH_TYPES__IAuthenticator, data?: any, params?: any, responseType?: ResponseType, meta?: M): Promise<T>;
}
