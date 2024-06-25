import { AxiosInstance, Method, ResponseType } from 'axios';
import { A_AUTH_TYPES__IAuthenticator } from '../types/A_AUTH_Authenticator.types';
import { A_AUTH_ContextClass } from './A_AUTH_Context.class';
import { A_AUTH_TYPES__APIProviderRequestConfig } from '../types/A_AUTH_APIProvider.types';
export declare class A_AUTH_APIProvider {
    loading: boolean;
    protected _axiosInstance: AxiosInstance;
    protected version: string;
    protected context: A_AUTH_ContextClass;
    protected baseURL: string;
    constructor(baseURL?: string);
    init(): void;
    protected request<T, M>(method: Method, url: string, authenticator?: A_AUTH_TYPES__IAuthenticator, data?: any, params?: any, responseType?: ResponseType, meta?: M): Promise<T>;
    protected post<T, M = any>(url: string, body?: any, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<T>;
    protected get<T, M = any>(url: string, params?: any, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<T>;
    protected put<T, M = any>(url: string, body?: any, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<T>;
    protected delete<T, M = any>(url: string, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<T>;
    protected patch<T, M = any>(url: string, body?: any, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<T>;
}
