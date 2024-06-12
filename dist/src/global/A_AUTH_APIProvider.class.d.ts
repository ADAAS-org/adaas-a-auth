import { AxiosInstance, AxiosResponse } from 'axios';
import { A_AUTH_Context } from './A_AUTH_Context.class';
export declare class A_AUTH_APIProvider {
    loading: boolean;
    protected axiosInstance: AxiosInstance;
    protected version: string;
    protected context: A_AUTH_Context;
    protected baseURL: string;
    protected customFormatter: (response: AxiosResponse<any>) => any;
    constructor(baseURL?: string);
    init(): void;
    protected errorHandler(error: any): void;
}
