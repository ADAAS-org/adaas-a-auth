"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_AUTH_CONSTANTS__ERROR_CODES = exports.A_AUTH_CONSTANTS__DEFAULT_ERRORS = exports.A_AUTH_ServerCommands = exports.A_AUTH_AppInteractions = exports.A_AUTH_ServerDelegateAuthenticator = exports.A_AUTH_ServerCommandsAuthenticator = exports.A_AUTH_AppInteractionsAuthenticator = exports.A_AUTH_Authenticator = exports.A_AUTH_ServerDelegate_APIProvider = exports.A_AUTH_ServerCommands_APIProvider = exports.A_AUTH_AppInteractions_APIProvider = exports.A_AUTH_APIProvider = exports.A_AUTH_Context = void 0;
var A_AUTH_Context_class_1 = require("./src/global/A_AUTH_Context.class");
Object.defineProperty(exports, "A_AUTH_Context", { enumerable: true, get: function () { return A_AUTH_Context_class_1.A_AUTH_Context; } });
// ============ Export Global & Service Entities ============
var A_AUTH_APIProvider_class_1 = require("./src/global/A_AUTH_APIProvider.class");
Object.defineProperty(exports, "A_AUTH_APIProvider", { enumerable: true, get: function () { return A_AUTH_APIProvider_class_1.A_AUTH_APIProvider; } });
var A_AUTH_AppInteractions_api_1 = require("./src/global/api-providers/A_AUTH_AppInteractions.api");
Object.defineProperty(exports, "A_AUTH_AppInteractions_APIProvider", { enumerable: true, get: function () { return A_AUTH_AppInteractions_api_1.A_AUTH_AppInteractions_APIProvider; } });
var A_AUTH_ServerCommands_api_1 = require("./src/global/api-providers/A_AUTH_ServerCommands.api");
Object.defineProperty(exports, "A_AUTH_ServerCommands_APIProvider", { enumerable: true, get: function () { return A_AUTH_ServerCommands_api_1.A_AUTH_ServerCommands_APIProvider; } });
var A_AUTH_ServerDelegate_api_1 = require("./src/global/api-providers/A_AUTH_ServerDelegate.api");
Object.defineProperty(exports, "A_AUTH_ServerDelegate_APIProvider", { enumerable: true, get: function () { return A_AUTH_ServerDelegate_api_1.A_AUTH_ServerDelegate_APIProvider; } });
var A_AUTH_Authenticator_class_1 = require("./src/global/A_AUTH_Authenticator.class");
Object.defineProperty(exports, "A_AUTH_Authenticator", { enumerable: true, get: function () { return A_AUTH_Authenticator_class_1.A_AUTH_Authenticator; } });
var A_AUTH_AppInteractions_authenticator_1 = require("./src/global/authenticator/A_AUTH_AppInteractions.authenticator");
Object.defineProperty(exports, "A_AUTH_AppInteractionsAuthenticator", { enumerable: true, get: function () { return A_AUTH_AppInteractions_authenticator_1.A_AUTH_AppInteractionsAuthenticator; } });
var A_AUTH_ServerCommands_authenticator_1 = require("./src/global/authenticator/A_AUTH_ServerCommands.authenticator");
Object.defineProperty(exports, "A_AUTH_ServerCommandsAuthenticator", { enumerable: true, get: function () { return A_AUTH_ServerCommands_authenticator_1.A_AUTH_ServerCommandsAuthenticator; } });
var A_AUTH_ServerDelegate_authenticator_1 = require("./src/global/authenticator/A_AUTH_ServerDelegate.authenticator");
Object.defineProperty(exports, "A_AUTH_ServerDelegateAuthenticator", { enumerable: true, get: function () { return A_AUTH_ServerDelegate_authenticator_1.A_AUTH_ServerDelegateAuthenticator; } });
// ================== API ==================
exports.A_AUTH_AppInteractions = __importStar(require("./src/api/app-interactions"));
exports.A_AUTH_ServerCommands = __importStar(require("./src/api/server-commands"));
// export * as A_AUTH_ServerDelegate from './src/api/server-delegate';
// ============ CONSTANTS Export ============
var errors_constants_1 = require("./src/constants/errors.constants");
Object.defineProperty(exports, "A_AUTH_CONSTANTS__DEFAULT_ERRORS", { enumerable: true, get: function () { return errors_constants_1.A_AUTH_CONSTANTS__DEFAULT_ERRORS; } });
Object.defineProperty(exports, "A_AUTH_CONSTANTS__ERROR_CODES", { enumerable: true, get: function () { return errors_constants_1.A_AUTH_CONSTANTS__ERROR_CODES; } });
// ============ TYPES Export ============
__exportStar(require("./src/types/A_AUTH_Authenticator.types"), exports);
__exportStar(require("./src/types/A_AUTH_APIProvider.types"), exports);
__exportStar(require("./src/types/A_AUTH_Context.types"), exports);
// ============ API TYPES Export ============
__exportStar(require("./src/api/app-interactions/index.types"), exports);
__exportStar(require("./src/api/server-commands/index.types"), exports);
//# sourceMappingURL=index.js.map