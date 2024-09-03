"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.SignUp = exports.SignIn = exports.Role = exports.MFA = exports.App = void 0;
const A_AUTH_Context_def_1 = require("../../definitions/A_AUTH_Context.def");
const A_AUTH_Apps_api_1 = require("./apps/A_AUTH_Apps.api");
const A_AUTH_MFA_api_1 = require("./mfa/A_AUTH_MFA.api");
const A_AUTH_Roles_api_1 = require("./roles/A_AUTH_Roles.api");
const A_AUTH_SignIn_api_1 = require("./sign-in/A_AUTH_SignIn.api");
const A_AUTH_SignUp_api_1 = require("./sign-up/A_AUTH_SignUp.api");
const A_AUTH_Token_api_1 = require("./token/A_AUTH_Token.api");
exports.App = new A_AUTH_Apps_api_1.A_AUTH_APP_INTERACTIONS__AppsAPI(A_AUTH_Context_def_1.A_AUTH_Context);
exports.MFA = new A_AUTH_MFA_api_1.A_AUTH_APP_INTERACTIONS__MfaAPI(A_AUTH_Context_def_1.A_AUTH_Context);
exports.Role = new A_AUTH_Roles_api_1.A_AUTH_APP_INTERACTIONS__RolesAPI(A_AUTH_Context_def_1.A_AUTH_Context);
exports.SignIn = new A_AUTH_SignIn_api_1.A_AUTH_APP_INTERACTIONS__SignInAPI(A_AUTH_Context_def_1.A_AUTH_Context);
exports.SignUp = new A_AUTH_SignUp_api_1.A_AUTH_APP_INTERACTIONS__SignUpAPI(A_AUTH_Context_def_1.A_AUTH_Context);
exports.Token = new A_AUTH_Token_api_1.A_AUTH_APP_INTERACTIONS__TokenAPI(A_AUTH_Context_def_1.A_AUTH_Context);
//# sourceMappingURL=index.js.map