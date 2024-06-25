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
exports.A_AUTH_APP_INTERACTIONS__SignInAPI = void 0;
const A_AUTH_AppInteractions_api_1 = require("../../../global/api-providers/A_AUTH_AppInteractions.api");
class A_AUTH_APP_INTERACTIONS__SignInAPI extends A_AUTH_AppInteractions_api_1.A_AUTH_AppInteractions_APIProvider {
    constructor() {
        super(...arguments);
        this.baseURL = this.context.getConfigurationProperty('SSO_LOCATION');
    }
    /**
     *
     * Method to sign in user using email and password
     *
     * @param credentials
     * @param meta
     * @returns
     */
    signIn(
    /**
     * The credentials to sign in email, password and optional appToken
     */
    credentials, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            return yield this.post(`/auth/sign-in`, credentials, {
                meta
            });
        });
    }
    /**
     * This method just do sign in to particular application.
     * In contrast with APP Authorize Request it will just sign in to the app and not attach the app to the user account
     *
     * !!!NOTE: If application is not authorized this request will FAIL
     *
     * @param app
     * @param meta
     * @returns
     */
    signInApp(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            return yield this.post(`/auth/sign-in/app`, request, {
                meta
            });
        });
    }
    /**
     *
     * Method to authorize an app for the user. Will connect application to user account
     *
     * Uses as a confirmation step after sign in to attach app with APP scopes to user account
     *
     * @param app
     * @param meta
     * @returns
     */
    authorizeApp(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            return yield this.post(`/auth/sign-in/app/authorize`, request, {
                meta
            });
        });
    }
    /**
     * When user sign in from a new device, a code will be sent to the user email to confirm the device
     *
     *
     * @param code
     * @param meta
     * @returns
     */
    authorizeDevice(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            return yield this.post(`/auth/sign-in/device/authorize`, request, {
                meta
            });
        });
    }
}
exports.A_AUTH_APP_INTERACTIONS__SignInAPI = A_AUTH_APP_INTERACTIONS__SignInAPI;
//# sourceMappingURL=A_AUTH_SignIn.api.js.map