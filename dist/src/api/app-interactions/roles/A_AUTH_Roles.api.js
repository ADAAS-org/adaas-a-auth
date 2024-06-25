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
exports.A_AUTH_APP_INTERACTIONS__RolesAPI = void 0;
const A_AUTH_AppInteractions_api_1 = require("../../../global/api-providers/A_AUTH_AppInteractions.api");
class A_AUTH_APP_INTERACTIONS__RolesAPI extends A_AUTH_AppInteractions_api_1.A_AUTH_AppInteractions_APIProvider {
    constructor() {
        super(...arguments);
        this.baseURL = this.context.getConfigurationProperty('SSO_LOCATION');
    }
    /**
     * This method returns a list of publicly available roles, like student, or business owner
     * These roles can be used to setup initial ADAAS System behavior
     *
     * @param pagination
     * @param filter
     * @returns
     */
    getPublicRolesList(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get('/roles/public', request, {
                meta
            });
        });
    }
    /**
     * Returns a list of roles in accordance with API Credentials permissions and issuer
     * Based on The parent organization Role
     *
     *
     * @param pagination
     * @param filter
     * @returns
     */
    getRolesList(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get('/roles', request, {
                meta
            });
        });
    }
    /**
     * Returns a role by ASEID
     *
     * @param roleIdOrIdentity
     * @returns
     */
    getRole(roleASEID, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get(`/roles/${roleASEID}`, {}, {
                meta
            });
        });
    }
}
exports.A_AUTH_APP_INTERACTIONS__RolesAPI = A_AUTH_APP_INTERACTIONS__RolesAPI;
//# sourceMappingURL=A_AUTH_Roles.api.js.map