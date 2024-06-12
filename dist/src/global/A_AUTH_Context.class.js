"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_AUTH_ContextInstance = exports.A_AUTH_Context = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const A_AUTH_Logger_class_1 = require("./A_AUTH_Logger.class");
const A_AUTH_Error_class_1 = require("./A_AUTH_Error.class");
const errors_constants_1 = require("../constants/errors.constants");
class A_AUTH_Context {
    constructor() {
        /**
         * Could be both API Credentials Token and User Token for the UI applications
         */
        this._token = '';
        // Credentials for ADAAS SSO via API
        this.ADAAS_API_CREDENTIALS_CLIENT_ID = '';
        this.ADAAS_API_CREDENTIALS_CLIENT_SECRET = '';
        // Configuration
        this.A_AUTH_CONFIG_SDK_VALIDATION = true;
        this.A_AUTH_CONFIG_VERBOSE = true;
        this.A_AUTH_CONFIG_IGNORE_ERRORS = false;
        this.A_AUTH_CONFIG_FRONTEND = false;
        this.baseURL = process.env.ADAAS_SSO_LOCATION || 'https://sso.adaas.org';
        this.init();
    }
    /**
     * Initializes the SDK or can be used to reinitialize the SDK
     */
    init() {
        this.logger = new A_AUTH_Logger_class_1.A_AUTH_Logger(this.verbose, this.ignoreErrors);
        this.axiosInstance = axios_1.default.create({
            baseURL: this.baseURL
        });
        this.axiosInstance.interceptors.request.use((conf) => __awaiter(this, void 0, void 0, function* () {
            if (this._token)
                conf.headers.Authorization = `Bearer ${this.token}`;
            return conf;
        }));
        this.axiosInstance.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            const err = new A_AUTH_Error_class_1.A_AUTH_Error(error);
            this.logger.error(err);
            throw err;
        });
        // global logger configuration
        // process.on('uncaughtException', (error) => {
        //     // log only in case of A_AUTH_Error
        //     if (error instanceof A_AUTH_Error)
        //         this.logger.error(error);
        // });
    }
    set token(token) {
        this._token = token;
    }
    get token() {
        return this._token;
    }
    get verbose() {
        return process.env.A_AUTH_CONFIG_VERBOSE === 'true' || this.A_AUTH_CONFIG_VERBOSE;
    }
    get ignoreErrors() {
        return process.env.A_AUTH_CONFIG_IGNORE_ERRORS === 'true' || this.A_AUTH_CONFIG_IGNORE_ERRORS;
    }
    get sdkValidation() {
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
    verbose, 
    /**
     * Ignore errors mode for the SDK
     */
    ignoreErrors, 
    /**
     * SDK Validation mode
     */
    sdkValidation, 
    /**
     * Location of the SSO Server
     */
    adaasSSOLocation = 'https://sso.adaas.org', 
    /**
     * FrontEnd mode: if true, the SDK will be configured for the FrontEnd and will not require API Credentials
     */
    frontEnd = false) {
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
    client_id, 
    /**
     * API Credentials Client Secret
     */
    client_secret) {
        this.ADAAS_API_CREDENTIALS_CLIENT_ID = client_id;
        this.ADAAS_API_CREDENTIALS_CLIENT_SECRET = client_secret;
        this.logger.log('Credentials set manually');
    }
    loadCredentials() {
        if (!this.credentialsPromise)
            this.credentialsPromise = new Promise((resolve, reject) => {
                switch (true) {
                    case !!this.ADAAS_API_CREDENTIALS_CLIENT_ID && !!this.ADAAS_API_CREDENTIALS_CLIENT_SECRET:
                        break;
                    case fs_1.default.existsSync('adaas.conf.json'):
                        this.loadConfigurationsFromFile();
                        break;
                    case !!process.env.ADAAS_API_CREDENTIALS_CLIENT_ID && !!process.env.ADAAS_API_CREDENTIALS_CLIENT_SECRET:
                        this.ADAAS_API_CREDENTIALS_CLIENT_ID = process.env.ADAAS_API_CREDENTIALS_CLIENT_ID;
                        this.ADAAS_API_CREDENTIALS_CLIENT_SECRET = process.env.ADAAS_API_CREDENTIALS_CLIENT_SECRET;
                        this.logger.log('Credentials loaded from environment variables');
                        break;
                    default:
                        reject(new A_AUTH_Error_class_1.A_AUTH_Error(errors_constants_1.A_AUTH_ERRORS.CREDENTIALS_NOT_FOUND));
                }
                this.logger = new A_AUTH_Logger_class_1.A_AUTH_Logger(this.verbose, this.ignoreErrors);
                resolve();
            });
        return this.credentialsPromise;
    }
    loadConfigurationsFromFile() {
        try {
            const data = fs_1.default.readFileSync('adaas.conf.json', 'utf8');
            const config = JSON.parse(data);
            if (!config.client_id || !config.client_secret)
                throw new A_AUTH_Error_class_1.A_AUTH_Error(errors_constants_1.A_AUTH_ERRORS.CREDENTIALS_NOT_FOUND);
            this.ADAAS_API_CREDENTIALS_CLIENT_ID = config.client_id;
            this.ADAAS_API_CREDENTIALS_CLIENT_SECRET = config.client_secret;
            this.A_AUTH_CONFIG_VERBOSE = config.verbose || this.A_AUTH_CONFIG_VERBOSE;
            this.A_AUTH_CONFIG_IGNORE_ERRORS = config.ignoreErrors || this.A_AUTH_CONFIG_IGNORE_ERRORS;
            this.A_AUTH_CONFIG_SDK_VALIDATION = config.sdkValidation || this.A_AUTH_CONFIG_SDK_VALIDATION;
            this.logger.log('Credentials loaded from file');
        }
        catch (error) {
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
    authenticate() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.A_AUTH_CONFIG_FRONTEND)
                return Promise.resolve();
            if (!this.authPromise) {
                this.authPromise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        yield this.loadCredentials();
                        const response = yield this.axiosInstance.post(`${this.baseURL}/api/v1/auth/api-credentials/authorize`, {
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
                    }
                    catch (error) {
                        reject(error);
                    }
                }));
            }
            return this.authPromise;
        });
    }
}
exports.A_AUTH_Context = A_AUTH_Context;
exports.A_AUTH_ContextInstance = new A_AUTH_Context();
//# sourceMappingURL=A_AUTH_Context.class.js.map