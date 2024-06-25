"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_AUTH_APIProvider = void 0;
const axios_1 = __importDefault(require("axios"));
const A_AUTH_Context_class_1 = require("./A_AUTH_Context.class");
class A_AUTH_APIProvider {
    constructor(baseURL) {
        this.loading = false;
        this.version = 'v1';
        this.context = A_AUTH_Context_class_1.A_AUTH_Context;
        this.baseURL = baseURL || this.baseURL;
        this.init();
    }
    init() {
        this._axiosInstance = axios_1.default.create({
            baseURL: this.baseURL
        });
    }
    request(method, url, authenticator, data, params, responseType, meta) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.loading = true;
                const targetAuth = authenticator || this.context.getAuthenticator();
                const result = yield this._axiosInstance.request({
                    method,
                    baseURL: this.baseURL,
                    url: `/api/${this.version}${url}`,
                    data,
                    headers: {
                        Authorization: `Bearer ${yield targetAuth.getToken()}`
                    },
                    params,
                    responseType: responseType ? responseType : 'json',
                });
                this.loading = false;
                return this.context.responseFormatter(result, meta);
            }
            catch (error) {
                this.loading = false;
                return this.context.errorsHandler(error, meta);
            }
        });
    }
    post(url, body, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('post', url, config === null || config === void 0 ? void 0 : config.authenticator, body, {}, config === null || config === void 0 ? void 0 : config.responseType, config === null || config === void 0 ? void 0 : config.meta);
        });
    }
    get(url, params, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('get', url, config === null || config === void 0 ? void 0 : config.authenticator, {}, params, config === null || config === void 0 ? void 0 : config.responseType, config === null || config === void 0 ? void 0 : config.meta);
        });
    }
    put(url, body, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('put', url, config === null || config === void 0 ? void 0 : config.authenticator, body, config === null || config === void 0 ? void 0 : config.params, config === null || config === void 0 ? void 0 : config.responseType, config === null || config === void 0 ? void 0 : config.meta);
        });
    }
    delete(url, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('delete', url, config === null || config === void 0 ? void 0 : config.authenticator, {}, config === null || config === void 0 ? void 0 : config.params, config === null || config === void 0 ? void 0 : config.responseType, config === null || config === void 0 ? void 0 : config.meta);
        });
    }
    patch(url, body, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('patch', url, config === null || config === void 0 ? void 0 : config.authenticator, body, config === null || config === void 0 ? void 0 : config.params, config === null || config === void 0 ? void 0 : config.responseType, config === null || config === void 0 ? void 0 : config.meta);
        });
    }
}
exports.A_AUTH_APIProvider = A_AUTH_APIProvider;
//# sourceMappingURL=A_AUTH_APIProvider.class.js.map