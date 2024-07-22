"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = exports.Token = exports.SSO = void 0;
const A_AUTH_Context_class_1 = require("../../global/A_AUTH_Context.class");
const A_AUTH_SSO_api_1 = require("./sso/A_AUTH_SSO.api");
const A_AUTH_Token_api_1 = require("./token/A_AUTH_Token.api");
const A_AUTH_Role_api_1 = require("./role/A_AUTH_Role.api");
exports.SSO = new A_AUTH_SSO_api_1.A_AUTH_SERVER_COMMANDS__SsoAPI(A_AUTH_Context_class_1.A_AUTH_Context);
exports.Token = new A_AUTH_Token_api_1.A_AUTH_SERVER_COMMANDS__TokenAPI(A_AUTH_Context_class_1.A_AUTH_Context);
exports.Role = new A_AUTH_Role_api_1.A_AUTH_SERVER_COMMANDS__RolesAPI(A_AUTH_Context_class_1.A_AUTH_Context);
//# sourceMappingURL=index.js.map