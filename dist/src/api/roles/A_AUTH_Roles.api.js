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
exports.A_AUTH_RolesAPIClass = void 0;
const A_AUTH_APIProvider_class_1 = require("../../global/A_AUTH_APIProvider.class");
class A_AUTH_RolesAPIClass extends A_AUTH_APIProvider_class_1.A_AUTH_APIProvider {
    constructor() {
        super();
        this.baseURL = process.env.ADAAS_SSO_LOCATION || 'https://sso.adaas.org';
        this.init();
    }
    // ==========================================
    // ================ Role API ================
    // ==========================================
    /**
     * Returns a list of roles in accordance with API Credentials permissions and issuer
     * Based on The parent organization Role
     *
     *
     * @param pagination
     * @param filter
     * @returns
     */
    getRoles(pagination, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .get('/api/v1/roles', {
                params: Object.assign(Object.assign({}, pagination), filter)
            });
            return response.data;
        });
    }
    /**
     * Returns a role by id or identity
     *
     * @param roleIdOrIdentity
     * @returns
     */
    getRole(roleIdOrIdentity) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .get(`/api/v1/roles/${roleIdOrIdentity}`);
            return response.data;
        });
    }
    /**
     * Creates a new role
     *
     * @param role
     * @returns
     */
    createRole(role) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance
                .post('/api/v1/roles', role);
            return response.data;
        });
    }
}
exports.A_AUTH_RolesAPIClass = A_AUTH_RolesAPIClass;
//# sourceMappingURL=A_AUTH_Roles.api.js.map