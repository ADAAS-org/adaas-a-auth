"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_AUTH_Error = void 0;
const axios_1 = require("axios");
class A_AUTH_Error extends Error {
    constructor(params) {
        super(params.message);
        this.serverCode = 500;
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
        var _a, _b, _c, _d, _e;
        this.name = err.name;
        this.code = err.code || 'A_AUTH_EXTERNAL_API_ERROR';
        this.description = ((_b = (_a = err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.description) || 'External API Error...';
        this.message = ((_d = (_c = err.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message) || 'External API Error...';
        this.serverCode = ((_e = err.response) === null || _e === void 0 ? void 0 : _e.status) || 500;
        return this;
    }
    fromDefault(err) {
        this.name = err.name;
        this.description = err.description;
        this.code = err.code;
        this.link = err.link;
        this.message = err.message;
        return this;
    }
    fromError(err) {
        this.name = err.name;
        this.message = err.message;
        this.stack = err.stack;
        this.code = 'A_AUTH_INTERNAL_ERROR';
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
exports.A_AUTH_Error = A_AUTH_Error;
//# sourceMappingURL=A_AUTH_Error.class.js.map