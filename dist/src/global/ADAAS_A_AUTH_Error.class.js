"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADAAS_A_AUTH_Error = void 0;
const axios_1 = require("axios");
class ADAAS_A_AUTH_Error extends Error {
    constructor(params) {
        super(params.message);
        this.identifyInitializer(params);
    }
    identifyInitializer(err) {
        switch (true) {
            case err instanceof axios_1.AxiosError:
                return this.fromAxios(err);
            case err instanceof Error:
                return this.fromError(err);
            default:
                return this.fromDefault(err);
        }
    }
    fromAxios(err) {
        var _a, _b;
        this.name = err.name;
        this.code = err.code || 'ADAAS_A_AUTH_EXTERNAL_API_ERROR';
        this.description = ((_b = (_a = err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.description) || 'External API Error...';
        return this;
    }
    fromDefault(err) {
        this.name = err.name;
        this.description = err.description;
        this.code = err.code;
        this.link = err.link;
        return this;
    }
    fromError(err) {
        this.name = err.name;
        this.message = err.message;
        this.stack = err.stack;
        this.code = 'ADAAS_A_AUTH_INTERNAL_ERROR';
        this.description = 'Something wen\'t wrong...';
        return this;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            description: this.description,
            code: this.code,
            link: this.link
        };
    }
}
exports.ADAAS_A_AUTH_Error = ADAAS_A_AUTH_Error;
//# sourceMappingURL=ADAAS_A_AUTH_Error.class.js.map