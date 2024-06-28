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
exports.A_AUTH_SERVER_COMMANDS__TokenAPI = void 0;
const A_AUTH_ServerCommands_api_1 = require("../../../global/api-providers/A_AUTH_ServerCommands.api");
class A_AUTH_SERVER_COMMANDS__TokenAPI extends A_AUTH_ServerCommands_api_1.A_AUTH_ServerCommands_APIProvider {
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
     * Allows to exchange code for the access token for the further communication between the client and the server
     *
     * @param request
     * @param meta
     * @returns
     */
    getAccessToken(request, config) {
        return this.post(`/-s-cmd-/token`, request, config);
    }
    /**
     *
     * Method to validate token regardless of the token type
     * For the BE operation it returns more information such as user, app scope and roles.
     *
     * Received information can be used to identify user access and permissions then with A-ARC API
     *
     * @param request
     * @param meta
     * @returns
     */
    verify(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post(`/-s-cmd-/token/verify`, request, config);
        });
    }
    /**
     *
     * Method to refresh token for the user.
     * This method can be used on Beckend side to refresh token for the user with ADAAS SSO
     *
     * @param request
     * @param meta
     * @returns
     */
    refresh(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post(`/-s-cmd-/token/refresh`, request, config);
        });
    }
}
exports.A_AUTH_SERVER_COMMANDS__TokenAPI = A_AUTH_SERVER_COMMANDS__TokenAPI;
//# sourceMappingURL=A_AUTH_Token.api.js.map