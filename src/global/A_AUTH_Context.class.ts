import axios, { AxiosInstance, AxiosResponse } from "axios";
import fs from 'fs';
import { A_AUTH_Logger } from "./A_AUTH_Logger.class";
import { A_AUTH_Error } from "./A_AUTH_Error.class";
import { A_AUTH_ERRORS } from "../constants/errors.constants";

export class A_AUTH_Context {

    /**
     * Could be both API Credentials Token and User Token for the UI applications
     */
    private _token: string = '';
    private _refreshTimeout?: NodeJS.Timeout;

    logger!: A_AUTH_Logger

    // Credentials for ADAAS SSO via API
    private ADAAS_API_CREDENTIALS_CLIENT_ID: string = '';
    private ADAAS_API_CREDENTIALS_CLIENT_SECRET: string = '';

    // Configuration
    private A_AUTH_CONFIG_SDK_VALIDATION: boolean = true
    private A_AUTH_CONFIG_VERBOSE: boolean = true
    private A_AUTH_CONFIG_IGNORE_ERRORS: boolean = false
    private A_AUTH_CONFIG_FRONTEND: boolean = false

    private baseURL = process.env.ADAAS_SSO_LOCATION || 'https://sso.adaas.org';
    protected axiosInstance!: AxiosInstance

    protected credentialsPromise?: Promise<void>;
    protected authPromise?: Promise<void>;

    constructor() {
        this.init();
    }


    /**
     * Initializes the SDK or can be used to reinitialize the SDK
     */
    protected init() {
        this.logger = new A_AUTH_Logger(this.verbose, this.ignoreErrors);

        this.axiosInstance = axios.create({
            baseURL: this.baseURL
        });

        this.axiosInstance.interceptors.request.use(async (conf) => {
            if (this._token)
                conf.headers.Authorization = `Bearer ${this.token}`;

            return conf;
        });

        this.axiosInstance.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            const err = new A_AUTH_Error(error);
            this.logger.error(err);
            throw err
        });

        // global logger configuration

        // process.on('uncaughtException', (error) => {
        //     // log only in case of A_AUTH_Error
        //     if (error instanceof A_AUTH_Error)
        //         this.logger.error(error);
        // });

    }

    set token(token: string) {
        this._token = token;
    }

    get token(): string {
        return this._token;
    }

    get verbose(): boolean {
        return process.env.A_AUTH_CONFIG_VERBOSE === 'true' || this.A_AUTH_CONFIG_VERBOSE;
    }

    get ignoreErrors(): boolean {
        return process.env.A_AUTH_CONFIG_IGNORE_ERRORS === 'true' || this.A_AUTH_CONFIG_IGNORE_ERRORS;
    }

    get sdkValidation(): boolean {
        return process.env.A_AUTH_CONFIG_SDK_VALIDATION === 'true' || this.A_AUTH_CONFIG_SDK_VALIDATION;
    }


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
        adaasSSOLocation: string = 'https://sso.adaas.org',

        /**
         * FrontEnd mode: if true, the SDK will be configured for the FrontEnd and will not require API Credentials
         */
        frontEnd: boolean = false
    ) {
        this.A_AUTH_CONFIG_VERBOSE = verbose || this.A_AUTH_CONFIG_VERBOSE;
        this.A_AUTH_CONFIG_IGNORE_ERRORS = ignoreErrors || this.A_AUTH_CONFIG_IGNORE_ERRORS;
        this.A_AUTH_CONFIG_SDK_VALIDATION = sdkValidation || this.A_AUTH_CONFIG_SDK_VALIDATION;
        this.A_AUTH_CONFIG_FRONTEND = frontEnd;

        this.baseURL = adaasSSOLocation;

        // reinitialize the SDK
        this.init();
    }


    setCredentials(
        /**
         * API Credentials Client ID
         */
        client_id: string,
        /**
         * API Credentials Client Secret
         */
        client_secret: string
    ) {
        this.ADAAS_API_CREDENTIALS_CLIENT_ID = client_id;
        this.ADAAS_API_CREDENTIALS_CLIENT_SECRET = client_secret;
        this.logger.log('Credentials set manually');
    }




    private loadCredentials(): Promise<void> {
        if (!this.credentialsPromise)
            this.credentialsPromise = new Promise((resolve, reject) => {
                switch (true) {
                    case !!this.ADAAS_API_CREDENTIALS_CLIENT_ID && !!this.ADAAS_API_CREDENTIALS_CLIENT_SECRET:
                        break;

                    case fs.existsSync('adaas.conf.json'):
                        this.loadConfigurationsFromFile();
                        break;

                    case !!process.env.ADAAS_API_CREDENTIALS_CLIENT_ID && !!process.env.ADAAS_API_CREDENTIALS_CLIENT_SECRET:

                        this.ADAAS_API_CREDENTIALS_CLIENT_ID = process.env.ADAAS_API_CREDENTIALS_CLIENT_ID;
                        this.ADAAS_API_CREDENTIALS_CLIENT_SECRET = process.env.ADAAS_API_CREDENTIALS_CLIENT_SECRET;

                        this.logger.log('Credentials loaded from environment variables');
                        break;

                    default:
                        reject(new A_AUTH_Error(A_AUTH_ERRORS.CREDENTIALS_NOT_FOUND));
                }

                this.logger = new A_AUTH_Logger(this.verbose, this.ignoreErrors);
                resolve();
            });

        return this.credentialsPromise;
    }



    private loadConfigurationsFromFile() {
        try {
            const data = fs.readFileSync('adaas.conf.json', 'utf8');

            const config = JSON.parse(data);

            if (!config.client_id || !config.client_secret)
                throw new A_AUTH_Error(A_AUTH_ERRORS.CREDENTIALS_NOT_FOUND);

            this.ADAAS_API_CREDENTIALS_CLIENT_ID = config.client_id;
            this.ADAAS_API_CREDENTIALS_CLIENT_SECRET = config.client_secret;
            this.A_AUTH_CONFIG_VERBOSE = config.verbose || this.A_AUTH_CONFIG_VERBOSE;
            this.A_AUTH_CONFIG_IGNORE_ERRORS = config.ignoreErrors || this.A_AUTH_CONFIG_IGNORE_ERRORS;
            this.A_AUTH_CONFIG_SDK_VALIDATION = config.sdkValidation || this.A_AUTH_CONFIG_SDK_VALIDATION;

            this.logger.log('Credentials loaded from file');
        } catch (error) {
            this.logger.error(error);
        }
    }


    /**
     * 
     * Authenticates the SDK with the API Credentials
     * Uses on BE side only
     * 
     * @returns void
     */
    async authenticate() {
        if (this.A_AUTH_CONFIG_FRONTEND)
            return Promise.resolve();

        if (!this.authPromise) {
            this.authPromise = new Promise(async (resolve, reject) => {
                try {
                    await this.loadCredentials();

                    const response: AxiosResponse<{ token: string, exp: number }> = await this.axiosInstance.post(
                        `${this.baseURL}/api/v1/auth/api-credentials/authorize`,
                        {
                            client_id: this.ADAAS_API_CREDENTIALS_CLIENT_ID,
                            client_secret: this.ADAAS_API_CREDENTIALS_CLIENT_SECRET
                        });

                    this._token = response.data.token;

                    if (this._refreshTimeout)
                        clearTimeout(this._refreshTimeout);

                    this._refreshTimeout = setTimeout(() => {
                        this.authPromise = undefined;
                        this.authenticate();
                    },
                        // 1 minute before expiration
                        (response.data.exp * 1000) - 60 * 1000);
                    resolve();
                } catch (error) {
                    reject(error);
                }
            });
        }

        return this.authPromise;
    }
}


export const A_AUTH_ContextInstance = new A_AUTH_Context();
