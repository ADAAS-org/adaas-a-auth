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
class A_AUTH_APIProvider {
    constructor(context, baseURL) {
        this.loading = false;
        this.version = 'v1';
        this.context = context;
        this.baseURL = baseURL || this.baseURL;
        this.init();
    }
    init() {
        this._axiosInstance = axios_1.default.create({
            baseURL: this.baseURL
        });
    }
    request(method, url, authenticator, data, params, config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /**
                 * Make sure the context is ready and all configurations are loaded
                 */
                yield this.context.ready;
                this.loading = true;
                this.context.Logger.log(`Calling ${method.toUpperCase()} ${url}`, {
                    data,
                    params,
                });
                const includeAuth = (!config || !config.adaas || config.adaas.auth !== false);
                let token;
                if (includeAuth) {
                    const targetAuth = authenticator || this.context.getAuthenticator();
                    yield targetAuth.authenticate();
                    token = yield targetAuth.getToken();
                    this.context.Logger.log(`Authentication successful`);
                }
                const result = yield this._axiosInstance.request({
                    method,
                    baseURL: this.baseURL,
                    url: `/api/${this.version}${url}`,
                    data,
                    headers: (includeAuth && token) ? Object.assign(Object.assign({}, config === null || config === void 0 ? void 0 : config.headers), { Authorization: `Bearer ${token}` }) : config === null || config === void 0 ? void 0 : config.headers,
                    params: (config === null || config === void 0 ? void 0 : config.params) ? config.params : params,
                    responseType: (config === null || config === void 0 ? void 0 : config.responseType) ? config.responseType : 'json',
                });
                this.loading = false;
                this.context.Logger.log(`Response received -> result.data`, result.data);
                return this.context.responseFormatter(result, config === null || config === void 0 ? void 0 : config.meta);
            }
            catch (error) {
                this.loading = false;
                return this.context.errorsHandler(error, config === null || config === void 0 ? void 0 : config.meta);
            }
        });
    }
    post(url, body, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('post', url, config === null || config === void 0 ? void 0 : config.authenticator, body, {}, config);
        });
    }
    get(url, params, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('get', url, config === null || config === void 0 ? void 0 : config.authenticator, {}, params, config);
        });
    }
    put(url, body, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('put', url, config === null || config === void 0 ? void 0 : config.authenticator, body, {}, config);
        });
    }
    delete(url, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('delete', url, config === null || config === void 0 ? void 0 : config.authenticator, {}, {}, config);
        });
    }
    patch(url, body, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('patch', url, config === null || config === void 0 ? void 0 : config.authenticator, body, {}, config);
        });
    }
}
exports.A_AUTH_APIProvider = A_AUTH_APIProvider;
//# sourceMappingURL=A_AUTH_APIProvider.class.js.map