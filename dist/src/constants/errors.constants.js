"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_AUTH_CONSTANTS__DEFAULT_ERRORS = exports.A_AUTH_CONSTANTS__ERROR_CODES = void 0;
var A_AUTH_CONSTANTS__ERROR_CODES;
(function (A_AUTH_CONSTANTS__ERROR_CODES) {
    A_AUTH_CONSTANTS__ERROR_CODES["UNABLE_TO_REFRESH_TOKEN"] = "ERR-401-0001";
    A_AUTH_CONSTANTS__ERROR_CODES["TOKEN_NOT_AVAILABLE"] = "ERR-401-0002";
    // ========================= FORBIDDEN ERRORS ================================
    A_AUTH_CONSTANTS__ERROR_CODES["UNABLE_TO_USE_APP_INTERACTIONS_REQUESTS_ON_SERVER_SIDE"] = "ERR-403-0001";
    A_AUTH_CONSTANTS__ERROR_CODES["UNABLE_TO_USE_SERVER_COMMANDS_FROM_BROWSER"] = "ERR-403-0002";
    A_AUTH_CONSTANTS__ERROR_CODES["UNABLE_TO_USE_SERVER_DELEGATE_FROM_BROWSER"] = "ERR-403-0003";
    A_AUTH_CONSTANTS__ERROR_CODES["UNABLE_TO_USE_SERVER_DELEGATE_WITHOUT_AUTH"] = "ERR-403-0004";
})(A_AUTH_CONSTANTS__ERROR_CODES || (exports.A_AUTH_CONSTANTS__ERROR_CODES = A_AUTH_CONSTANTS__ERROR_CODES = {}));
;
exports.A_AUTH_CONSTANTS__DEFAULT_ERRORS = {
    UNABLE_TO_REFRESH_TOKEN: {
        serverCode: 401,
        code: A_AUTH_CONSTANTS__ERROR_CODES.UNABLE_TO_REFRESH_TOKEN,
        description: 'Unable to refresh token',
        message: 'Unable to refresh token'
    },
    TOKEN_NOT_AVAILABLE: {
        serverCode: 401,
        code: A_AUTH_CONSTANTS__ERROR_CODES.TOKEN_NOT_AVAILABLE,
        description: 'Token not available',
        message: 'Token not available'
    },
    // ========================= FORBIDDEN ERRORS ================================
    UNABLE_TO_USE_APP_INTERACTIONS_REQUESTS_ON_SERVER_SIDE: {
        serverCode: 403,
        code: A_AUTH_CONSTANTS__ERROR_CODES.UNABLE_TO_USE_APP_INTERACTIONS_REQUESTS_ON_SERVER_SIDE,
        description: 'Unable to use App Interactions requests on Server side',
        message: 'Unable to use App Interactions requests on Server side'
    },
    UNABLE_TO_USE_SERVER_COMMANDS_FROM_BROWSER: {
        serverCode: 403,
        code: A_AUTH_CONSTANTS__ERROR_CODES.UNABLE_TO_USE_SERVER_COMMANDS_FROM_BROWSER,
        description: 'Unable to use Server Commands from Browser',
        message: 'Unable to use Server Commands from Browser'
    },
    UNABLE_TO_USE_SERVER_DELEGATE_FROM_BROWSER: {
        serverCode: 403,
        code: A_AUTH_CONSTANTS__ERROR_CODES.UNABLE_TO_USE_SERVER_DELEGATE_FROM_BROWSER,
        description: 'Unable to use Server Delegate from Browser',
        message: 'Unable to use Server Delegate from Browser'
    },
    UNABLE_TO_USE_SERVER_DELEGATE_WITHOUT_AUTH: {
        serverCode: 403,
        code: A_AUTH_CONSTANTS__ERROR_CODES.UNABLE_TO_USE_SERVER_DELEGATE_WITHOUT_AUTH,
        description: 'Unable to use Server Delegate without Auth',
        message: 'Unable to use Server Delegate without Auth'
    },
};
//# sourceMappingURL=errors.constants.js.map