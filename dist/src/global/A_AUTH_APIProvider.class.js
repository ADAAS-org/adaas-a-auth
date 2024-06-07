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
const A_AUTH_Error_class_1 = require("./A_AUTH_Error.class");
class A_AUTH_APIProvider {
    constructor() {
        this.loading = false;
        this.version = 'v1';
        this.context = A_AUTH_Context_class_1.A_AUTH_ContextInstance;
        this.baseURL = 'https://api.adaas.org';
        this.init();
    }
    init() {
        this.axiosInstance = axios_1.default.create({
            baseURL: this.baseURL
        });
        this.axiosInstance.interceptors.request.use((conf) => __awaiter(this, void 0, void 0, function* () {
            if (!this.context.token)
                yield this.context.authenticate();
            conf.headers.Authorization = `Bearer ${this.context.token}`;
            this.loading = true;
            return conf;
        }));
        this.axiosInstance.interceptors.response.use((response) => {
            this.loading = false;
            return response;
        }, (error) => {
            // whatever you want to do with the error
            this.loading = false;
            return this.errorHandler(error);
        });
    }
    errorHandler(error) {
        throw new A_AUTH_Error_class_1.A_AUTH_Error(error);
    }
}
exports.A_AUTH_APIProvider = A_AUTH_APIProvider;
//# sourceMappingURL=A_AUTH_APIProvider.class.js.map