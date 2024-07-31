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
exports.A_AUTH_SERVER_DELEGATE__RolesAPI = void 0;
const A_AUTH_ServerDelegate_api_1 = require("../../../global/api-providers/A_AUTH_ServerDelegate.api");
class A_AUTH_SERVER_DELEGATE__RolesAPI extends A_AUTH_ServerDelegate_api_1.A_AUTH_ServerDelegate_APIProvider {
    get baseURL() {
        return this.context.getConfigurationProperty('SSO_LOCATION');
    }
    create(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .post('/roles', request, config);
        });
    }
    /**
     * Returns a role by ASEID
     *
     * @param roleIdOrIdentity
     * @returns
     */
    load(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get(`/roles/${request.roleASEID}`, {}, config);
        });
    }
}
exports.A_AUTH_SERVER_DELEGATE__RolesAPI = A_AUTH_SERVER_DELEGATE__RolesAPI;
//# sourceMappingURL=A_AUTH_Role.api.js.map