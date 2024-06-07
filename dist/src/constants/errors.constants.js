"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_AUTH_ERRORS = void 0;
exports.A_AUTH_ERRORS = {
    EMPTY_CREDENTIALS: {
        name: 'EMPTY_CREDENTIALS',
        message: 'Credentials are not provided',
        code: 'ADAAS_A_AUTH_GENERAL_00001',
        description: 'Credentials hve not been found in env. Please make sure you included them into ENV variables or directly into constructor.',
        link: ''
    },
    CREDENTIALS_NOT_FOUND: {
        name: 'CREDENTIALS_NOT_FOUND',
        message: 'Credentials were not found',
        code: 'ADAAS_A_AUTH_GENERAL_00002',
        description: 'Credentials were not found in the provided file',
        link: ''
    },
    METHOD_NOT_IMPLEMENTED: {
        name: 'METHOD_NOT_IMPLEMENTED',
        message: 'Method is not implemented',
        code: 'ADAAS_A_AUTH_GENERAL_00003',
        description: 'Method is not implemented',
        link: ''
    },
};
//# sourceMappingURL=errors.constants.js.map