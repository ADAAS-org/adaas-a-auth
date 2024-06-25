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
exports.A_AUTH_APP_INTERACTIONS__AppsAPI = void 0;
const A_AUTH_AppInteractions_api_1 = require("../../../global/api-providers/A_AUTH_AppInteractions.api");
class A_AUTH_APP_INTERACTIONS__AppsAPI extends A_AUTH_AppInteractions_api_1.A_AUTH_AppInteractions_APIProvider {
    constructor() {
        super(...arguments);
        this.baseURL = this.context.getConfigurationProperty('SSO_LOCATION');
    }
    /**
     *  Returns a lis of apps corresponding to the user and the filter
     *
     *
     * @param request
     * @param meta
     * @returns
     */
    getApps(request, meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get('/api/v1/apps', request, {
                meta
            });
        });
    }
    /**
     * Returns a app by id or identity
     *
     * @param appASEID
     * @returns
     */
    getApp(
    /**
     * The app ASEID
     */
    appASEID, meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get(`/api/v1/apps/${appASEID}`, {}, {
                meta
            });
        });
    }
}
exports.A_AUTH_APP_INTERACTIONS__AppsAPI = A_AUTH_APP_INTERACTIONS__AppsAPI;
//# sourceMappingURL=A_AUTH_Apps.api.js.map