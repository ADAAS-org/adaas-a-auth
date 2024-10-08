import { Method } from "axios";
import { A_AUTH_APIProvider } from "../A_AUTH_APIProvider.class";
import { A_AUTH_TYPES__IAuthenticator } from "@adaas/a-auth/types/A_AUTH_Authenticator.types";
import { A_AUTH_CONSTANTS__ERROR_CODES } from "@adaas/a-auth/constants/errors.constants";
import { A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth/types/A_AUTH_APIProvider.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
import { A_AUTH_ServerDelegateAuthenticator } from "../authenticator/A_AUTH_ServerDelegate.authenticator";
import { A_AUTH_ContextClass } from "../A_AUTH_Context.class";


export class A_AUTH_ServerDelegate_APIProvider<C extends A_AUTH_ContextClass> extends A_AUTH_APIProvider<C> {

    protected async request<T, M>(
        method: Method,
        url: string,
        auth: A_AUTH_TYPES__IAuthenticator,
        data?: any,
        params?: any,
        config?: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ): Promise<T> {
        if (this.context.environment !== 'server')
            this.context.Errors.throw(A_AUTH_CONSTANTS__ERROR_CODES.UNABLE_TO_USE_SERVER_DELEGATE_FROM_BROWSER);
        else if (!auth)
            this.context.Errors.throw(A_AUTH_CONSTANTS__ERROR_CODES.UNABLE_TO_USE_SERVER_DELEGATE_WITHOUT_AUTH);
        else
            return super.request<T, M>(method, url, auth, data, params, config);
    }

    protected async post<T, M = any>(
        url: string,
        body: any = {},
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ): Promise<T> {
        return super.post<T, M>(url, body, config);
    }

    protected async get<T, M = any>(
        url: string,
        params: any = {},
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ): Promise<T> {
        return super.get<T, M>(url, params, config);
    }

    protected async put<T, M = any>(
        url: string,
        body: any = {},
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ): Promise<T> {
        return super.put<T, M>(url, body, config);
    }

    protected async delete<T, M = any>(
        url: string,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ): Promise<T> {
        return super.delete<T, M>(url, config);
    }

    protected async patch<T, M = any>(
        url: string,
        body: any = {},
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ): Promise<T> {
        return super.patch<T, M>(url, body, config);
    }
}