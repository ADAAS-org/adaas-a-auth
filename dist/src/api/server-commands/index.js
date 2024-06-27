"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenAPI = exports.SsoAPI = void 0;
const A_AUTH_Context_class_1 = require("../../global/A_AUTH_Context.class");
const A_AUTH_SSO_api_1 = require("./sso/A_AUTH_SSO.api");
const A_AUTH_Token_api_1 = require("./token/A_AUTH_Token.api");
exports.SsoAPI = new A_AUTH_SSO_api_1.A_AUTH_SERVER_COMMANDS__SsoAPI(A_AUTH_Context_class_1.A_AUTH_Context);
exports.TokenAPI = new A_AUTH_Token_api_1.A_AUTH_SERVER_COMMANDS__TokenAPI(A_AUTH_Context_class_1.A_AUTH_Context);
//# sourceMappingURL=index.js.map