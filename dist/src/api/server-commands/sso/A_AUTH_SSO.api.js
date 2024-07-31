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
exports.A_AUTH_SERVER_COMMANDS__SsoAPI = void 0;
const A_AUTH_ServerCommands_api_1 = require("../../../global/api-providers/A_AUTH_ServerCommands.api");
class A_AUTH_SERVER_COMMANDS__SsoAPI extends A_AUTH_ServerCommands_api_1.A_AUTH_ServerCommands_APIProvider {
    get baseURL() {
        return this.context.getConfigurationProperty('SSO_LOCATION');
    }
    /**
     * Generates a sign in url for the user to sign in via ADAAS SS0
     *
     * @param request
     * @param config
     * @returns
     */
    getSignInUrl(request, config) {
        return this.post(`/-s-cmd-/sso/sign-in/url`, request, config);
    }
    /**
     *
     * Method to generate sign up url for the user to sign up via ADAAS SSO
     *
     * @param request
     * @param config
     * @returns
     */
    getSignUpUrl(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post(`/-s-cmd-/sso/sign-up/url`, request, config);
        });
    }
    /**
     * Method to verify origin of the request
     *
     * @param request
     * @param config
     * @returns
     */
    verifyOrigin(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post(`/-s-cmd-/sso/origin/verify`, request, config);
        });
    }
}
exports.A_AUTH_SERVER_COMMANDS__SsoAPI = A_AUTH_SERVER_COMMANDS__SsoAPI;
//# sourceMappingURL=A_AUTH_SSO.api.js.map