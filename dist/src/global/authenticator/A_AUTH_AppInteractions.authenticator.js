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
exports.A_AUTH_AppInteractionsAuthenticator = void 0;
const A_AUTH_Authenticator_class_1 = require("../A_AUTH_Authenticator.class");
const a_sdk_types_1 = require("@adaas/a-sdk-types");
const errors_constants_1 = require("../../constants/errors.constants");
class A_AUTH_AppInteractionsAuthenticator extends A_AUTH_Authenticator_class_1.A_AUTH_Authenticator {
    constructor() {
        super(...arguments);
        /**
         * Could be both API Credentials Token and User Token for the UI applications
         * Or special Token for the SDK operations on behalf of the user
         */
        this._token = '';
        this._tokenExp = 0;
        this._refreshToken = '';
    }
    /**
     *
     *
     * @returns void
     */
    authenticate() {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Authentication must be done only once by external request using SSO API instead of SDK
             */
            if (!this.authPromise) {
                this.authPromise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        this._token = localStorage.getItem('x-adaas-access') || '';
                        const response = yield this._axiosInstance
                            .post(`${this.baseURL}/api/v1/a-auth/token/verify`, {
                            token: this._token,
                        });
                        this._tokenExp = response.data.exp;
                        /**
                         * Run automatic Refresh of the token
                         */
                        this.refresh(this._tokenExp);
                        resolve({
                            token: this._token,
                            exp: this._tokenExp
                        });
                    }
                    catch (error) {
                        reject(error);
                    }
                }));
            }
            return this.authPromise;
        });
    }
    refresh(exp) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                yield ((_a = this.schedule) === null || _a === void 0 ? void 0 : _a.clear());
                this.schedule = a_sdk_types_1.A_SDK_CommonHelper
                    .schedule((exp * 1000) - 60 * 1000, () => __awaiter(this, void 0, void 0, function* () {
                    this._refreshToken = localStorage.getItem('x-adaas-refresh') || '';
                    const updatedTokens = yield this._axiosInstance
                        .post(`${this.baseURL}/api/v1/a-auth/token/refresh`, {
                        refreshToken: this._refreshToken
                    }, {
                        headers: {
                            Authorization: `Bearer ${this._token}`
                        }
                    });
                    this._token = updatedTokens.data.token;
                    this._refreshToken = updatedTokens.data.refreshToken;
                    return {
                        token: this._token,
                        refreshToken: this._refreshToken
                    };
                }));
                return yield this.schedule.promise;
            }
            catch (error) {
                this.context.Errors.throw(errors_constants_1.A_AUTH_CONSTANTS__ERROR_CODES.UNABLE_TO_REFRESH_TOKEN);
            }
        });
    }
}
exports.A_AUTH_AppInteractionsAuthenticator = A_AUTH_AppInteractionsAuthenticator;
//# sourceMappingURL=A_AUTH_AppInteractions.authenticator.js.map