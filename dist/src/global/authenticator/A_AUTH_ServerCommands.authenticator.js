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
exports.A_AUTH_ServerCommandsAuthenticator = void 0;
const A_AUTH_Authenticator_class_1 = require("../A_AUTH_Authenticator.class");
const a_sdk_types_1 = require("@adaas/a-sdk-types");
const errors_constants_1 = require("../../constants/errors.constants");
class A_AUTH_ServerCommandsAuthenticator extends A_AUTH_Authenticator_class_1.A_AUTH_Authenticator {
    constructor() {
        super(...arguments);
        /**
         * Could be both API Credentials Token and User Token for the UI applications
         * Or special Token for the SDK operations on behalf of the user
         */
        this._token = '';
        this._tokenExp = 0;
        this._client_id = '';
        this._client_secret = '';
        this.baseURL = '';
    }
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.authPromise;
            if (!this._token)
                this.context.Errors.throw(errors_constants_1.A_AUTH_CONSTANTS__ERROR_CODES.TOKEN_NOT_AVAILABLE);
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
    authenticate() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.authPromise) {
                this.authPromise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const response = yield this._axiosInstance
                            .post(`${this.baseURL}/api/v1/-s-cmd-/api-credentials/authorize`, {
                            client_id: this._client_id,
                            client_secret: this._client_secret
                        });
                        this._token = response.data.token;
                        this._tokenExp = response.data.exp;
                        /**
                         * Run automatic Refresh of the token
                         */
                        this.refresh();
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
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.schedule)
                    this.schedule.clear();
                const schedule = a_sdk_types_1.A_SDK_CommonHelper
                    .schedule((this._tokenExp * 1000) - 60 * 1000, () => {
                    this.authPromise = undefined;
                    return this.authenticate();
                });
                return yield schedule.promise;
            }
            catch (error) {
                return {
                    token: this._token,
                    exp: this._tokenExp
                };
            }
        });
    }
}
exports.A_AUTH_ServerCommandsAuthenticator = A_AUTH_ServerCommandsAuthenticator;
//# sourceMappingURL=A_AUTH_ServerCommands.authenticator.js.map