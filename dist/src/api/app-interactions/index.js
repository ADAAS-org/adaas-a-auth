"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenAPI = exports.SignUpAPI = exports.SignInAPI = exports.RolesAPI = exports.MfaAPI = exports.AppsAPI = void 0;
const A_AUTH_Apps_api_1 = require("./apps/A_AUTH_Apps.api");
const A_AUTH_MFA_api_1 = require("./mfa/A_AUTH_MFA.api");
const A_AUTH_Roles_api_1 = require("./roles/A_AUTH_Roles.api");
const A_AUTH_SignIn_api_1 = require("./sign-in/A_AUTH_SignIn.api");
const A_AUTH_SignUp_api_1 = require("./sign-up/A_AUTH_SignUp.api");
const A_AUTH_Token_api_1 = require("./token/A_AUTH_Token.api");
exports.AppsAPI = new A_AUTH_Apps_api_1.A_AUTH_APP_INTERACTIONS__AppsAPI();
exports.MfaAPI = new A_AUTH_MFA_api_1.A_AUTH_APP_INTERACTIONS__MfaAPI();
exports.RolesAPI = new A_AUTH_Roles_api_1.A_AUTH_APP_INTERACTIONS__RolesAPI();
exports.SignInAPI = new A_AUTH_SignIn_api_1.A_AUTH_APP_INTERACTIONS__SignInAPI();
exports.SignUpAPI = new A_AUTH_SignUp_api_1.A_AUTH_APP_INTERACTIONS__SignUpAPI();
exports.TokenAPI = new A_AUTH_Token_api_1.A_AUTH_APP_INTERACTIONS__TokenAPI();
//# sourceMappingURL=index.js.map