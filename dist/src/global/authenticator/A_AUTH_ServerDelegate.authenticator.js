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
exports.A_AUTH_ServerDelegateAuthenticator = void 0;
const A_AUTH_Authenticator_class_1 = require("../A_AUTH_Authenticator.class");
const a_sdk_types_1 = require("@adaas/a-sdk-types");
class A_AUTH_ServerDelegateAuthenticator extends A_AUTH_Authenticator_class_1.A_AUTH_Authenticator {
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
        super(credentials, config);
        this._client_id = '';
        this._client_secret = '';
        this.baseURL = '';
        this._userASEID = credentials.userASEID;
        this._userScope = credentials.userScope;
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
                        const response = yield this._axiosInstance.post(`${this.baseURL}/api/v1/-s-cmd-/api-credentials/authorize`, {
                            client_id: this._client_id,
                            client_secret: this._client_secret,
                            usr: this._userASEID,
                            scope: this._userScope
                        });
                        this.refresh(response.data.exp);
                        resolve({
                            token: response.data.token,
                            exp: response.data.exp
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
    /**
     *
     * For this AUTH Type, the refresh is not needed
     * Because of that we will just delete the token from the memory
     *
     * @param exp - Expiration Date in Unix Timestamp
     * @param userASEID
     * @returns
     */
    refresh(exp) {
        return __awaiter(this, void 0, void 0, function* () {
            const diff = exp - Math.floor(Date.now() / 1000);
            a_sdk_types_1.A_SDK_CommonHelper
                .schedule((diff * 1000) - 60 * 1000, () => __awaiter(this, void 0, void 0, function* () { return this.authPromise = undefined; }));
            return;
        });
    }
}
exports.A_AUTH_ServerDelegateAuthenticator = A_AUTH_ServerDelegateAuthenticator;
//# sourceMappingURL=A_AUTH_ServerDelegate.authenticator.js.map