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
exports.A_AUTH_APP_INTERACTIONS__SignUpAPI = void 0;
const A_AUTH_AppInteractions_api_1 = require("../../../global/api-providers/A_AUTH_AppInteractions.api");
class A_AUTH_APP_INTERACTIONS__SignUpAPI extends A_AUTH_AppInteractions_api_1.A_AUTH_AppInteractions_APIProvider {
    constructor() {
        super(...arguments);
        this.baseURL = this.context.getConfigurationProperty('SSO_LOCATION');
        // async signUpInvite(credentials, meta) {
        //     this.loading = true
        //     return await this.__axiosInstance.post(`/auth/invite/sign-up`, credentials, {
        //         meta
        //     });
        // }
    }
    signUp(
    /**
     * The new user to sign up
     */
    newUser, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            return yield this.post(`/auth/sign-up`, newUser, {
                meta
            });
        });
    }
    signUpProfile(
    /**
     * user profile to sign up
     */
    profile, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            return yield this.post(`/auth/sign-up/profile`, profile, {
                meta
            });
        });
    }
    signUpOrganization(
    /**
     * The organization to sign up
     */
    organization, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            return yield this.post(`/auth/sign-up/organization`, organization, {
                meta
            });
        });
    }
}
exports.A_AUTH_APP_INTERACTIONS__SignUpAPI = A_AUTH_APP_INTERACTIONS__SignUpAPI;
//# sourceMappingURL=A_AUTH_SignUp.api.js.map