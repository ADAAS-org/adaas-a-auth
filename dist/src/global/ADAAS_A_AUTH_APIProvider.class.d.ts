import { AxiosInstance, AxiosResponse } from 'axios';
import { ADAAS_A_AUTH_Context } from './ADAAS_A_AUTH_Context.class';
export declare class ADAAS_A_AUTH_APIProvider {
    loading: boolean;
    protected axiosInstance: AxiosInstance;
    protected version: string;
    protected context: ADAAS_A_AUTH_Context;
    protected baseURL: string;
    protected customFormatter: (response: AxiosResponse<any>) => any;
    constructor();
    init(): void;
    protected errorHandler(error: any): void;
}
