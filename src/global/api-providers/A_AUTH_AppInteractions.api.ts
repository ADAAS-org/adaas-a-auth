import { Method, ResponseType } from "axios";
import { A_AUTH_APIProvider } from "../A_AUTH_APIProvider.class";
import { A_AUTH_TYPES__IAuthenticator } from "@adaas/a-auth/types/A_AUTH_Authenticator.types";
import { A_AUTH_CONSTANTS__ERROR_CODES } from "@adaas/a-auth/constants/errors.constants";
import { A_AUTH_Context, A_AUTH_ContextClass } from "../A_AUTH_Context.class";
import { A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth/types/A_AUTH_APIProvider.types";


export class A_AUTH_AppInteractions_APIProvider<C extends A_AUTH_ContextClass> extends A_AUTH_APIProvider<C> {

    protected async request<T, M>(
        method: Method,
        url: string,
        auth?: A_AUTH_TYPES__IAuthenticator,
        data?: any,
        params?: any,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ): Promise<T> {
        if (this.context.environment !== 'browser')
            this.context.Errors.throw(A_AUTH_CONSTANTS__ERROR_CODES.UNABLE_TO_USE_APP_INTERACTIONS_REQUESTS_ON_SERVER_SIDE);
        else
            return super.request<T, M>(method, url, auth, data, params, config);
    }
}