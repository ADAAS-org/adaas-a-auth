import axios, { AxiosInstance, AxiosResponse, Method, ResponseType } from 'axios';
import { A_AUTH_TYPES__IAuthenticator } from '../types/A_AUTH_Authenticator.types';
import { A_AUTH_Context, A_AUTH_ContextClass } from './A_AUTH_Context.class';
import { A_AUTH_TYPES__APIProviderRequestConfig } from '../types/A_AUTH_APIProvider.types';

export class A_AUTH_APIProvider<C extends A_AUTH_ContextClass> {

    loading: boolean = false;


    protected _axiosInstance!: AxiosInstance
    protected version: string = 'v1'
    protected context!: C;
    protected baseURL!: string;

    constructor(
        context: C,
        baseURL?: string,
    ) {
        this.context = context;
        this.baseURL = baseURL || this.baseURL;
        this.init();
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


            const includeAuth = (!config || !config.adaas || config.adaas.auth !== false);
            let token: string | undefined;

            if (includeAuth) {
                const targetAuth = authenticator || this.context.getAuthenticator();

                await targetAuth.authenticate();

                token = await targetAuth.getToken();
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

            return this.context.responseFormatter<T, M>(result, config?.meta);

        } catch (error) {
            this.loading = false;

            return this.context.errorsHandler<M>(error as any, config?.meta)
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