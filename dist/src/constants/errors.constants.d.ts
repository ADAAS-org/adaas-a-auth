export declare enum A_AUTH_CONSTANTS__ERROR_CODES {
    UNABLE_TO_REFRESH_TOKEN = "ERR-401-0001",
    TOKEN_NOT_AVAILABLE = "ERR-401-0002",
    UNABLE_TO_USE_APP_INTERACTIONS_REQUESTS_ON_SERVER_SIDE = "ERR-403-0001",
    UNABLE_TO_USE_SERVER_COMMANDS_FROM_BROWSER = "ERR-403-0002",
    UNABLE_TO_USE_SERVER_DELEGATE_FROM_BROWSER = "ERR-403-0003",
    UNABLE_TO_USE_SERVER_DELEGATE_WITHOUT_AUTH = "ERR-403-0004"
}
export declare const A_AUTH_CONSTANTS__DEFAULT_ERRORS: {
    UNABLE_TO_REFRESH_TOKEN: {
        serverCode: number;
        code: A_AUTH_CONSTANTS__ERROR_CODES;
        description: string;
        message: string;
    };
    TOKEN_NOT_AVAILABLE: {
        serverCode: number;
        code: A_AUTH_CONSTANTS__ERROR_CODES;
        description: string;
        message: string;
    };
    UNABLE_TO_USE_APP_INTERACTIONS_REQUESTS_ON_SERVER_SIDE: {
        serverCode: number;
        code: A_AUTH_CONSTANTS__ERROR_CODES;
        description: string;
        message: string;
    };
    UNABLE_TO_USE_SERVER_COMMANDS_FROM_BROWSER: {
        serverCode: number;
        code: A_AUTH_CONSTANTS__ERROR_CODES;
        description: string;
        message: string;
    };
    UNABLE_TO_USE_SERVER_DELEGATE_FROM_BROWSER: {
        serverCode: number;
        code: A_AUTH_CONSTANTS__ERROR_CODES;
        description: string;
        message: string;
    };
    UNABLE_TO_USE_SERVER_DELEGATE_WITHOUT_AUTH: {
        serverCode: number;
        code: A_AUTH_CONSTANTS__ERROR_CODES;
        description: string;
        message: string;
    };
};
