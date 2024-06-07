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
exports.ADAAS_A_AUTH_ContextInstance = exports.ADAAS_A_AUTH_Context = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const ADAAS_A_AUTH_Logger_class_1 = require("./ADAAS_A_AUTH_Logger.class");
const ADAAS_A_AUTH_Error_class_1 = require("./ADAAS_A_AUTH_Error.class");
const errors_constants_1 = require("../constants/errors.constants");
class ADAAS_A_AUTH_Context {
    constructor() {
        this._token = '';
        // Credentials
        this.ADAAS_API_CREDENTIALS_CLIENT_ID = '';
        this.ADAAS_API_CREDENTIALS_CLIENT_SECRET = '';
        // Configuration
        this.ADAAS_A_AUTH_CONFIG_SDK_VALIDATION = true;
        this.ADAAS_A_AUTH_CONFIG_VERBOSE = true;
        this.ADAAS_A_AUTH_CONFIG_IGNORE_ERRORS = false;
        this.baseURL = process.env.ADAAS_SSO_LOCATION || 'https://sso.adaas.org';
        this.credentialsPromise = null;
        this.logger = new ADAAS_A_AUTH_Logger_class_1.ADAAS_A_AUTH_Logger(this.verbose, this.ignoreErrors);
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
            const err = new ADAAS_A_AUTH_Error_class_1.ADAAS_A_AUTH_Error(error);
            this.logger.error(err);
            throw err;
        });
        // global logger configuration
        // process.on('uncaughtException', (error) => {
        //     // log only in case of ADAAS_A_AUTH_Error
        //     if (error instanceof ADAAS_A_AUTH_Error)
        //         this.logger.error(error);
        // });
    }
    get token() {
        return this._token;
    }
    get verbose() {
        return process.env.ADAAS_A_AUTH_CONFIG_VERBOSE === 'true' || this.ADAAS_A_AUTH_CONFIG_VERBOSE;
    }
    get ignoreErrors() {
        return process.env.ADAAS_A_AUTH_CONFIG_IGNORE_ERRORS === 'true' || this.ADAAS_A_AUTH_CONFIG_IGNORE_ERRORS;
    }
    get sdkValidation() {
        return process.env.ADAAS_A_AUTH_CONFIG_SDK_VALIDATION === 'true' || this.ADAAS_A_AUTH_CONFIG_SDK_VALIDATION;
    }
    setCredentials(client_id, client_secret) {
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
                        reject(new ADAAS_A_AUTH_Error_class_1.ADAAS_A_AUTH_Error(errors_constants_1.ADAAS_A_AUTH_ERRORS.CREDENTIALS_NOT_FOUND));
                }
                this.logger = new ADAAS_A_AUTH_Logger_class_1.ADAAS_A_AUTH_Logger(this.verbose, this.ignoreErrors);
                resolve();
            });
        return this.credentialsPromise;
    }
    loadConfigurationsFromFile() {
        try {
            const data = fs_1.default.readFileSync('adaas.conf.json', 'utf8');
            const config = JSON.parse(data);
            if (!config.client_id || !config.client_secret)
                throw new ADAAS_A_AUTH_Error_class_1.ADAAS_A_AUTH_Error(errors_constants_1.ADAAS_A_AUTH_ERRORS.CREDENTIALS_NOT_FOUND);
            this.ADAAS_API_CREDENTIALS_CLIENT_ID = config.client_id;
            this.ADAAS_API_CREDENTIALS_CLIENT_SECRET = config.client_secret;
            this.ADAAS_A_AUTH_CONFIG_VERBOSE = config.verbose || this.ADAAS_A_AUTH_CONFIG_VERBOSE;
            this.ADAAS_A_AUTH_CONFIG_IGNORE_ERRORS = config.ignoreErrors || this.ADAAS_A_AUTH_CONFIG_IGNORE_ERRORS;
            this.ADAAS_A_AUTH_CONFIG_SDK_VALIDATION = config.sdkValidation || this.ADAAS_A_AUTH_CONFIG_SDK_VALIDATION;
            this.logger.log('Credentials loaded from file');
        }
        catch (error) {
            this.logger.error(error);
        }
    }
    authenticate() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._token)
                return;
            yield this.loadCredentials();
            const response = yield this.axiosInstance.post(`${this.baseURL}/api/v1/auth/api-credentials/authorize`, {
                client_id: this.ADAAS_API_CREDENTIALS_CLIENT_ID,
                client_secret: this.ADAAS_API_CREDENTIALS_CLIENT_SECRET
            });
            this._token = response.data.token;
        });
    }
}
exports.ADAAS_A_AUTH_Context = ADAAS_A_AUTH_Context;
exports.ADAAS_A_AUTH_ContextInstance = new ADAAS_A_AUTH_Context();
//# sourceMappingURL=ADAAS_A_AUTH_Context.class.js.map