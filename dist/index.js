"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_AUTH_Authenticator = exports.A_AUTH_Context = exports.A_AUTH_Error = void 0;
const A_AUTH_Context_class_1 = require("./src/global/A_AUTH_Context.class");
var A_AUTH_Error_class_1 = require("./src/global/A_AUTH_Error.class");
Object.defineProperty(exports, "A_AUTH_Error", { enumerable: true, get: function () { return A_AUTH_Error_class_1.A_AUTH_Error; } });
// To keep proper naming and prevent confusion
exports.A_AUTH_Context = A_AUTH_Context_class_1.A_AUTH_ContextInstance;
// ============ API Export ============
var A_AUTH_Authenticator_class_1 = require("./src/api/A_AUTH_Authenticator.class");
Object.defineProperty(exports, "A_AUTH_Authenticator", { enumerable: true, get: function () { return A_AUTH_Authenticator_class_1.A_AUTH_Authenticator; } });
//# sourceMappingURL=index.js.map