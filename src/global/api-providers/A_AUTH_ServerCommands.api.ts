import { Method, ResponseType } from "axios";
import { A_AUTH_APIProvider } from "../A_AUTH_APIProvider.class";
import { A_AUTH_TYPES__IAuthenticator } from "@adaas/a-auth/types/A_AUTH_Authenticator.types";
import { A_AUTH_CONSTANTS__ERROR_CODES } from "@adaas/a-auth/constants/errors.constants";
import { A_AUTH_ContextClass } from "../A_AUTH_Context.class";


export class A_AUTH_ServerCommands_APIProvider<C extends A_AUTH_ContextClass> extends A_AUTH_APIProvider<C> {

    protected async request<T, M>(
        method: Method,
        url: string,
        auth?: A_AUTH_TYPES__IAuthenticator,
        data?: any,
        params?: any,
        responseType?: ResponseType,
        meta?: M
    ): Promise<T> {
        if (this.context.environment !== 'server')
            this.context.Errors.throw(A_AUTH_CONSTANTS__ERROR_CODES.UNABLE_TO_USE_SERVER_COMMANDS_FROM_BROWSER);
        else
            return super.request<T, M>(method, url, auth, data, params, responseType, meta);
    }
}