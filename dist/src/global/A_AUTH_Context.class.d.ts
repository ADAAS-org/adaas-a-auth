import { AxiosInstance } from "axios";
import { A_AUTH_Logger } from "./A_AUTH_Logger.class";
export declare class A_AUTH_Context {
    /**
     * Could be both API Credentials Token and User Token for the UI applications
     */
    private _token;
    private _refreshTimeout?;
    logger: A_AUTH_Logger;
    private ADAAS_API_CREDENTIALS_CLIENT_ID;
    private ADAAS_API_CREDENTIALS_CLIENT_SECRET;
    private A_AUTH_CONFIG_SDK_VALIDATION;
    private A_AUTH_CONFIG_VERBOSE;
    private A_AUTH_CONFIG_IGNORE_ERRORS;
    private A_AUTH_CONFIG_FRONTEND;
    private baseURL;
    protected axiosInstance: AxiosInstance;
    protected credentialsPromise?: Promise<void>;
    protected authPromise?: Promise<void>;
    constructor();
    /**
     * Initializes the SDK or can be used to reinitialize the SDK
     */
    protected init(): void;
    set token(token: string);
    get token(): string;
    get verbose(): boolean;
    get ignoreErrors(): boolean;
    get sdkValidation(): boolean;
    /**
     * Configures the SDK with the provided parameters or uses the default ones
     * Useful for Front End applications to omit env variables and use the SDK
     *
     * @param verbose
     * @param ignoreErrors
     * @param sdkValidation
     */
    configure(
    /**
     * Verbose mode for the SDK
     */
    verbose?: boolean, 
    /**
     * Ignore errors mode for the SDK
     */
    ignoreErrors?: boolean, 
    /**
     * SDK Validation mode
     */
    sdkValidation?: boolean, 
    /**
     * Location of the SSO Server
     */
    adaasSSOLocation?: string, 
    /**
     * FrontEnd mode: if true, the SDK will be configured for the FrontEnd and will not require API Credentials
     */
    frontEnd?: boolean): void;
    setCredentials(
    /**
     * API Credentials Client ID
     */
    client_id: string, 
    /**
     * API Credentials Client Secret
     */
    client_secret: string): void;
    private loadCredentials;
    private loadConfigurationsFromFile;
    /**
     *
     * Authenticates the SDK with the API Credentials
     * Uses on BE side only
     *
     * @returns void
     */
    authenticate(): Promise<void>;
}
export declare const A_AUTH_ContextInstance: A_AUTH_Context;
