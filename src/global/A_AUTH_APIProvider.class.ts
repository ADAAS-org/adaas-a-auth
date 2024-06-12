import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { A_AUTH_Context, A_AUTH_ContextInstance } from './A_AUTH_Context.class';
import { A_AUTH_Error } from './A_AUTH_Error.class';

export class A_AUTH_APIProvider {

    loading: boolean = false;

    protected axiosInstance!: AxiosInstance
    protected version: string = 'v1'
    protected context: A_AUTH_Context = A_AUTH_ContextInstance
    protected baseURL: string = 'https://api.adaas.org';



    protected customFormatter!: (response: AxiosResponse<any>) => any

    constructor(baseURL?: string) {
        
        this.baseURL = baseURL || this.baseURL;

        this.init();
    }


    init() {
        this.axiosInstance = axios.create({
            baseURL: this.baseURL
        });

        this.axiosInstance.interceptors.request.use(async (conf) => {
            if (!this.context.token)
                await this.context.authenticate()

            conf.headers.Authorization = `Bearer ${this.context.token}`;

            this.loading = true;

            return conf;
        });

        this.axiosInstance.interceptors.response.use((response) => {
            this.loading = false;
            return response
        }, (error) => {
            // whatever you want to do with the error
            this.loading = false;
            return this.errorHandler(error)
        });
    }


    protected errorHandler(error) {
        const internalError = new A_AUTH_Error(error);

        this.context.logger.error(internalError);

        throw internalError;
    }
}

