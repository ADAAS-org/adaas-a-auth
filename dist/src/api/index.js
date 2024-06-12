"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_AUTH_AppsAPI = exports.A_AUTH_RolesAPI = exports.A_AUTH_Authenticator = void 0;
const A_AUTH_Authenticator_class_1 = require("./A_AUTH_Authenticator.class");
const A_AUTH_Apps_api_1 = require("./apps/A_AUTH_Apps.api");
const A_AUTH_Roles_api_1 = require("./roles/A_AUTH_Roles.api");
exports.A_AUTH_Authenticator = new A_AUTH_Authenticator_class_1.A_AUTH_AuthenticatorClass();
exports.A_AUTH_RolesAPI = new A_AUTH_Roles_api_1.A_AUTH_RolesAPIClass();
exports.A_AUTH_AppsAPI = new A_AUTH_Apps_api_1.A_AUTH_AppsAPIClass();
//# sourceMappingURL=index.js.map