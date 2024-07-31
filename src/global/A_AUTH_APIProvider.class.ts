import axios, { AxiosInstance, AxiosResponse, Method, ResponseType } from 'axios';
import { A_AUTH_TYPES__IAuthenticator } from '../types/A_AUTH_Authenticator.types';
import { A_AUTH_Context, A_AUTH_ContextClass } from './A_AUTH_Context.class';
import { A_AUTH_TYPES__APIProviderRequestConfig } from '../types/A_AUTH_APIProvider.types';
import { A_SDK_Error, A_SDK_ServerError } from '@adaas/a-sdk-types';

export class A_AUTH_APIProvider<C extends A_AUTH_ContextClass> {

    loading: boolean = false;


    protected _axiosInstance!: AxiosInstance
    protected version: string = 'v1'
    protected context!: C;
    private _base: string

    constructor(
        context: C,
        baseURL?: string,
    ) {
        this.context = context;
        this._base = baseURL || this.baseURL;
        this.init();
    }


    /**
     * Wrapper to work with dynamic ENV variables
     */
    protected get baseURL(): string {
        return this.baseURL;
    }


    init() {
        this._axiosInstance = axios.create({
            baseURL: this.baseURL
        });
    }


    protected async request<T, M>(
        method: Method,
        url: string,
        authenticator?: A_AUTH_TYPES__IAuthenticator,
        data?: any,
        params?: any,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ): Promise<T> {
        try {
            /**
             * Make sure the context is ready and all configurations are loaded
             */
            await this.context.ready;

            this.loading = true;

            this.context.Logger.log(`Calling ${method.toUpperCase()} ${url}`, {
                data,
                params,
            });

            const includeAuth = (!config || !config.adaas || config.adaas.auth !== false);
            let token: string | undefined;

            if (includeAuth) {

                const targetAuth = authenticator || this.context.getAuthenticator();

                await targetAuth.authenticate();

                token = await targetAuth.getToken();

                this.context.Logger.log(`Authentication successful`);
            }

            const result: AxiosResponse<T> = await this._axiosInstance.request({
                method,
                baseURL: this.baseURL,
                url: `/api/${this.version}${url}`,
                data,
                headers: (includeAuth && token) ? {
                    ...config?.headers,
                    Authorization: `Bearer ${token}`
                } : config?.headers,
                params: config?.params ? config.params : params,
                responseType: config?.responseType ? config.responseType : 'json',
            });

            this.loading = false;

            this.context.Logger.log(`Response received -> result.data`, result.data);

            return this.context.responseFormatter<T, M>(result, config?.meta);

        } catch (error) {
            this.loading = false;

            this.context.errorsHandler<M>(error as any, config?.meta)

            const receivedError = new A_SDK_ServerError(error);

            this.context.Logger.error(receivedError);

            throw receivedError;
        }
    }


    protected async post<T, M = any>(
        url: string,
        body?: any,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>,
    ): Promise<T> {
        return this.request<T, M>('post', url, config?.authenticator, body, {}, config);
    }


    protected async get<T, M = any>(
        url: string,
        params?: any,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>,
    ): Promise<T> {
        return this.request<T, M>('get', url, config?.authenticator, {}, params, config);
    }


    protected async put<T, M = any>(
        url: string,
        body?: any,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>,
    ): Promise<T> {
        return this.request<T, M>('put', url, config?.authenticator, body, {}, config);
    }


    protected async delete<T, M = any>(
        url: string,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>,
    ): Promise<T> {
        return this.request<T, M>('delete', url, config?.authenticator, {}, {}, config);
    }


    protected async patch<T, M = any>(
        url: string,
        body?: any,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>,
    ): Promise<T> {
        return this.request<T, M>('patch', url, config?.authenticator, body, {}, config);
    }
}