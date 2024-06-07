import { AxiosInstance } from "axios";
export declare class ADAAS_A_AUTH_Context {
    private _token;
    private logger;
    private ADAAS_API_CREDENTIALS_CLIENT_ID;
    private ADAAS_API_CREDENTIALS_CLIENT_SECRET;
    private ADAAS_A_AUTH_CONFIG_SDK_VALIDATION;
    private ADAAS_A_AUTH_CONFIG_VERBOSE;
    private ADAAS_A_AUTH_CONFIG_IGNORE_ERRORS;
    private baseURL;
    protected axiosInstance: AxiosInstance;
    protected credentialsPromise: Promise<void> | null;
    constructor();
    get token(): string;
    get verbose(): boolean;
    get ignoreErrors(): boolean;
    get sdkValidation(): boolean;
    setCredentials(client_id: string, client_secret: string): void;
    private loadCredentials;
    private loadConfigurationsFromFile;
    authenticate(): Promise<void>;
}
export declare const ADAAS_A_AUTH_ContextInstance: ADAAS_A_AUTH_Context;
