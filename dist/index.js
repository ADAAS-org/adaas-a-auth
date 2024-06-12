"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_AUTH_AppsAPIClass = exports.A_AUTH_RolesAPIClass = exports.A_AUTH_AuthenticatorClass = exports.A_AUTH_AppsAPI = exports.A_AUTH_RolesAPI = exports.A_AUTH_Authenticator = exports.A_AUTH_APIProvider = exports.A_AUTH_Context = exports.A_AUTH_Error = void 0;
const A_AUTH_Context_class_1 = require("./src/global/A_AUTH_Context.class");
var A_AUTH_Error_class_1 = require("./src/global/A_AUTH_Error.class");
Object.defineProperty(exports, "A_AUTH_Error", { enumerable: true, get: function () { return A_AUTH_Error_class_1.A_AUTH_Error; } });
// To keep proper naming and prevent confusion
exports.A_AUTH_Context = A_AUTH_Context_class_1.A_AUTH_ContextInstance;
// Export Some Global Entities
var A_AUTH_APIProvider_class_1 = require("./src/global/A_AUTH_APIProvider.class");
Object.defineProperty(exports, "A_AUTH_APIProvider", { enumerable: true, get: function () { return A_AUTH_APIProvider_class_1.A_AUTH_APIProvider; } });
// ================== API ==================
// Mainly for BE purposes it uses API paths from ENV Variables
var api_1 = require("./src/api");
Object.defineProperty(exports, "A_AUTH_Authenticator", { enumerable: true, get: function () { return api_1.A_AUTH_Authenticator; } });
Object.defineProperty(exports, "A_AUTH_RolesAPI", { enumerable: true, get: function () { return api_1.A_AUTH_RolesAPI; } });
Object.defineProperty(exports, "A_AUTH_AppsAPI", { enumerable: true, get: function () { return api_1.A_AUTH_AppsAPI; } });
// ============ API CLASSES Export ============
// Mainly for FE purposes it uses API directly from class constructor
var A_AUTH_Authenticator_class_1 = require("./src/api/A_AUTH_Authenticator.class");
Object.defineProperty(exports, "A_AUTH_AuthenticatorClass", { enumerable: true, get: function () { return A_AUTH_Authenticator_class_1.A_AUTH_AuthenticatorClass; } });
var A_AUTH_Roles_api_1 = require("./src/api/roles/A_AUTH_Roles.api");
Object.defineProperty(exports, "A_AUTH_RolesAPIClass", { enumerable: true, get: function () { return A_AUTH_Roles_api_1.A_AUTH_RolesAPIClass; } });
var A_AUTH_Apps_api_1 = require("./src/api/apps/A_AUTH_Apps.api");
Object.defineProperty(exports, "A_AUTH_AppsAPIClass", { enumerable: true, get: function () { return A_AUTH_Apps_api_1.A_AUTH_AppsAPIClass; } });
//# sourceMappingURL=index.js.map