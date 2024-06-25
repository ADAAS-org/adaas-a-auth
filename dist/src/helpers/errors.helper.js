"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADAAS_ErrorsProvider = void 0;
const a_sdk_types_1 = require("@adaas/a-sdk-types");
const errors_constants_1 = require("../constants/errors.constants");
exports.ADAAS_ErrorsProvider = new a_sdk_types_1.A_SDK_ErrorsProvider('a-auth')
    .addRegistry(errors_constants_1.A_AUTH_CONSTANTS__DEFAULT_ERRORS);
//# sourceMappingURL=errors.helper.js.map