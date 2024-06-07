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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADAAS_A_AUTH_Authenticator = exports.ADAAS_A_AUTH_AuthenticatorClass = void 0;
const ADAAS_A_AUTH_APIProvider_class_1 = require("../global/ADAAS_A_AUTH_APIProvider.class");
class ADAAS_A_AUTH_AuthenticatorClass extends ADAAS_A_AUTH_APIProvider_class_1.ADAAS_A_AUTH_APIProvider {
    constructor() {
        super();
        this.baseURL = process.env.ADAAS_SSO_LOCATION || 'https://sso.adaas.org';
        this.init();
    }
    getSSOUrl(redirectURL) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('baseURL', this.baseURL);
            const response = yield this.axiosInstance.post('/api/v1/auth/sso/url', {
                redirectURL
            });
            return response.data.url;
        });
    }
    getAccessTokenFromCode(code) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.post('/auth/sso/token', {
                code
            });
            return response.data.token;
        });
    }
    getAccessTokenFromHint(hint) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.post('/auth/sso/refresh', {
                hint
            });
            return response.data.token;
        });
    }
}
exports.ADAAS_A_AUTH_AuthenticatorClass = ADAAS_A_AUTH_AuthenticatorClass;
exports.ADAAS_A_AUTH_Authenticator = new ADAAS_A_AUTH_AuthenticatorClass();
//# sourceMappingURL=ADAAS_A_AUTH_Authenticator.class.js.map