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
exports.A_AUTH_ServerCommands_APIProvider = void 0;
const A_AUTH_APIProvider_class_1 = require("../A_AUTH_APIProvider.class");
const errors_constants_1 = require("../../constants/errors.constants");
class A_AUTH_ServerCommands_APIProvider extends A_AUTH_APIProvider_class_1.A_AUTH_APIProvider {
    request(method, url, auth, data, params, config) {
        const _super = Object.create(null, {
            request: { get: () => super.request }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (this.context.environment !== 'server')
                this.context.Errors.throw(errors_constants_1.A_AUTH_CONSTANTS__ERROR_CODES.UNABLE_TO_USE_SERVER_COMMANDS_FROM_BROWSER);
            else
                return _super.request.call(this, method, url, auth, data, params, config);
        });
    }
}
exports.A_AUTH_ServerCommands_APIProvider = A_AUTH_ServerCommands_APIProvider;
//# sourceMappingURL=A_AUTH_ServerCommands.api.js.map