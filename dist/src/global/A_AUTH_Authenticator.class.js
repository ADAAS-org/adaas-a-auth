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
exports.A_AUTH_Authenticator = void 0;
const axios_1 = __importDefault(require("axios"));
const a_sdk_types_1 = require("@adaas/a-sdk-types");
const errors_helper_1 = require("../helpers/errors.helper");
const errors_constants_1 = require("@adaas/a-sdk-types/dist/src/constants/errors.constants");
const errors_constants_2 = require("../constants/errors.constants");
class A_AUTH_Authenticator {
    constructor(
    /**
     *  Default API Credentials configuration
     */
    credentials, 
    /**
     *  Authenticator Configuration
     */
    config = {
        ssoUrl: 'https://sso.adaas.org'
    }) {
        /**
         * Could be both API Credentials Token and User Token for the UI applications
         * Or special Token for the SDK operations on behalf of the user
         */
        this._token = '';
        this.baseURL = '';
        this.baseURL = config.ssoUrl;
        this.init();
    }
    /**
     * Initializes the SDK or can be used to reinitialize the SDK
     */
    init() {
        this._axiosInstance = axios_1.default.create({
            baseURL: this.baseURL
        });
        this._axiosInstance.interceptors.response.use(response => response, error => { throw new a_sdk_types_1.A_SDK_ServerError(error); });
    }
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.authPromise;
            if (!this._token)
                throw errors_helper_1.ADAAS_ErrorsProvider.getError(errors_constants_2.A_AUTH_CONSTANTS__ERROR_CODES.TOKEN_NOT_AVAILABLE);
            return this._token;
        });
    }
    /**
     *
     * Authenticates the SDK with the API Credentials
     * Uses on BE side only
     *
     * @returns void
     */
    authenticate(...props) {
        return __awaiter(this, void 0, void 0, function* () {
            throw errors_helper_1.ADAAS_ErrorsProvider.getError(errors_constants_1.A_SDK_CONSTANTS__ERROR_CODES.METHOD_NOT_IMPLEMENTED);
        });
    }
    refresh(...props) {
        return __awaiter(this, void 0, void 0, function* () {
            throw errors_helper_1.ADAAS_ErrorsProvider.getError(errors_constants_1.A_SDK_CONSTANTS__ERROR_CODES.METHOD_NOT_IMPLEMENTED);
        });
    }
}
exports.A_AUTH_Authenticator = A_AUTH_Authenticator;
//# sourceMappingURL=A_AUTH_Authenticator.class.js.map