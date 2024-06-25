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
exports.A_AUTH_APP_INTERACTIONS__MfaAPI = void 0;
const A_AUTH_AppInteractions_api_1 = require("../../../global/api-providers/A_AUTH_AppInteractions.api");
class A_AUTH_APP_INTERACTIONS__MfaAPI extends A_AUTH_AppInteractions_api_1.A_AUTH_AppInteractions_APIProvider {
    constructor() {
        super(...arguments);
        this.baseURL = this.context.getConfigurationProperty('SSO_LOCATION');
    }
    /**
     * Request to enable MFA for the user using Authenticator App
     *
     * @param meta
     * @returns
     */
    enableMFA_App(
    /**
     *  The meta object to pass through API for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post(`/auth/2fa/app/enable`, {}, {
                meta
            });
        });
    }
    /**
     *
     * Method to verify MFA token from Authenticator App
     *
     * @param request
     * @param meta
     * @returns
     */
    verifyMFA_AppToken(request, 
    /**
     *  The meta object to pass through API for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            return yield this.post(`/auth/2fa/app/token/verify`, request, {
                meta
            });
        });
    }
    /**
     * Method to verify MFA token from Email
     *
     *
     * @param request
     * @param meta
     * @returns
     */
    verifyMFA_EmailToken(request, 
    /**
     *  The meta object to pass through API for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            return yield this.post(`/auth/2fa/email/token/verify`, request, {
                meta
            });
        });
    }
}
exports.A_AUTH_APP_INTERACTIONS__MfaAPI = A_AUTH_APP_INTERACTIONS__MfaAPI;
//# sourceMappingURL=A_AUTH_MFA.api.js.map