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
exports.A_AUTH_Authenticator = exports.A_AUTH_AuthenticatorClass = void 0;
const A_AUTH_APIProvider_class_1 = require("../global/A_AUTH_APIProvider.class");
class A_AUTH_AuthenticatorClass extends A_AUTH_APIProvider_class_1.A_AUTH_APIProvider {
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
    getAccessToken(hint) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.post('/api/v1/auth/sso/token', {
                hint
            });
            return response.data;
        });
    }
    verifyToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.post('/api/v1/auth/sso/token/verify', {
                token
            });
            return response.data.status === 'OK';
        });
    }
    refreshToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.post('/api/v1/auth/sso/token/refresh', {
                refreshToken
            });
            return response.data;
        });
    }
}
exports.A_AUTH_AuthenticatorClass = A_AUTH_AuthenticatorClass;
exports.A_AUTH_Authenticator = new A_AUTH_AuthenticatorClass();
//# sourceMappingURL=A_AUTH_Authenticator.class.js.map