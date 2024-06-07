import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ADAAS_A_AUTH_Context, ADAAS_A_AUTH_ContextInstance } from './ADAAS_A_AUTH_Context.class';
import { ADAAS_A_AUTH_Error } from './ADAAS_A_AUTH_Error.class';

export class ADAAS_A_AUTH_APIProvider {

    loading: boolean = false;

    protected axiosInstance!: AxiosInstance
    protected version: string = 'v1'
    protected context: ADAAS_A_AUTH_Context = ADAAS_A_AUTH_ContextInstance
    protected baseURL = process.env.ADAAS_API_LOCATION || 'https://api.adaas.org';


    protected customFormatter!: (response: AxiosResponse<any>) => any

    constructor() {
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
        throw new ADAAS_A_AUTH_Error(error);
    }
}

