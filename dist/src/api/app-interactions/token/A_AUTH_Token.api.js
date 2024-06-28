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
exports.A_AUTH_APP_INTERACTIONS__TokenAPI = void 0;
const A_AUTH_AppInteractions_api_1 = require("../../../global/api-providers/A_AUTH_AppInteractions.api");
class A_AUTH_APP_INTERACTIONS__TokenAPI extends A_AUTH_AppInteractions_api_1.A_AUTH_AppInteractions_APIProvider {
    constructor() {
        super(...arguments);
        this.baseURL = this.context.getConfigurationProperty('SSO_LOCATION');
        // async validateInvite(invite) {
        //     this.loading = true
        //     return await this.__axiosInstance.post(`/auth/invite/verify`, {
        //         invite
        //     });
        // }
    }
    /**
     *
     * Method to validate token
     *
     * @param request
     * @param meta
     * @returns
     */
    verify(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post(`/auth/token/verify`, request, {
                meta
            });
        });
    }
    /**
     *
     * Method to refresh token
     *
     * @param request
     * @param meta
     * @returns
     */
    refresh(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post(`/auth/token/refresh`, request, {
                meta
            });
        });
    }
}
exports.A_AUTH_APP_INTERACTIONS__TokenAPI = A_AUTH_APP_INTERACTIONS__TokenAPI;
//# sourceMappingURL=A_AUTH_Token.api.js.map