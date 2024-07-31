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
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_AUTH_Context = exports.A_AUTH_ContextClass = void 0;
const a_sdk_types_1 = require("@adaas/a-sdk-types");
const A_AUTH_AppInteractions_authenticator_1 = require("./authenticator/A_AUTH_AppInteractions.authenticator");
const A_AUTH_ServerCommands_authenticator_1 = require("./authenticator/A_AUTH_ServerCommands.authenticator");
const A_AUTH_ServerDelegate_authenticator_1 = require("./authenticator/A_AUTH_ServerDelegate.authenticator");
const errors_constants_1 = require("../constants/errors.constants");
const errors_constants_2 = require("@adaas/a-sdk-types/dist/src/constants/errors.constants");
class A_AUTH_ContextClass extends a_sdk_types_1.A_SDK_ContextClass {
    constructor(params = {
        namespace: 'a-auth',
        errors: errors_constants_1.A_AUTH_CONSTANTS__DEFAULT_ERRORS
    }) {
        super(Object.assign({ namespace: 'a-auth', errors: errors_constants_1.A_AUTH_CONSTANTS__DEFAULT_ERRORS }, params));
        this.params = params;
        /**
         * API Credentials Authentication using CLIENT_ID and CLIENT_SECRET
         * Uses Across all SDKs connected to A-AUTH
         */
        this.global = a_sdk_types_1.A_SDK_Context;
        this.SSO_LOCATION = 'https://sso.adaas.org';
        this.responseFormatter = (response) => response.data;
        this.errorsHandler = (error) => { throw new a_sdk_types_1.A_SDK_ServerError(error); };
        this.authContextAllowedProperties = [
            ...this.defaultAllowedToReadProperties,
            "SSO_LOCATION"
        ];
        this._AuthMap = new Map();
    }
    getConfigurationProperty(property) {
        if (this.authContextAllowedProperties.includes(property))
            return this[property];
        this.Errors.throw(errors_constants_2.A_SDK_CONSTANTS__ERROR_CODES.CONFIGURATION_PROPERTY_NOT_EXISTS_OR_NOT_ALLOWED_TO_READ);
    }
    /**
     * Allows to define a global custom API response and error processors
     *
     * @param responseFormatter
     * @param errorsHandler
     */
    setAPIHandlers(responseFormatter, errorsHandler) {
        this.responseFormatter = responseFormatter || this.responseFormatter;
        this.errorsHandler = errorsHandler || this.errorsHandler;
    }
    /**
     *
     * Returns a authentication depending on the request type
     *
     * @param userASEID
     * @param userScope
     * @returns
     */
    getAuthenticator(userASEID, userScope) {
        switch (true) {
            /**
             * In this case it should be Front End SDK with token received from Auth API
             */
            case this.environment === 'browser': {
                const existedAuth = this._AuthMap.get(this.environment);
                if (existedAuth)
                    return existedAuth;
                else {
                    const frontendAuth = new A_AUTH_AppInteractions_authenticator_1.A_AUTH_AppInteractionsAuthenticator({}, {
                        ssoUrl: this.SSO_LOCATION
                    });
                    this._AuthMap.set(this.environment, frontendAuth);
                    return frontendAuth;
                }
            }
            /**
             * In this case it should be APP API credentials to do operations on behalf of the user
             *
             */
            case this.environment === 'server' && !!userASEID && !!userScope: {
                const existedDelegate = this._AuthMap.get(`${userScope}/${userASEID}`);
                if (existedDelegate)
                    return existedDelegate;
                else {
                    const delegate = new A_AUTH_ServerDelegate_authenticator_1.A_AUTH_ServerDelegateAuthenticator({
                        client_id: this.CLIENT_ID,
                        client_secret: this.CLIENT_SECRET,
                        userASEID: userASEID,
                        userScope: userScope
                    }, {
                        ssoUrl: this.SSO_LOCATION
                    });
                    this._AuthMap.set(userASEID, delegate);
                    return delegate;
                }
            }
            /**
             * This could be both API Credentials connected to User or APP credentials
             */
            default: {
                const existedServer = this._AuthMap.get(this.environment);
                if (existedServer)
                    return existedServer;
                else {
                    const server = new A_AUTH_ServerCommands_authenticator_1.A_AUTH_ServerCommandsAuthenticator({
                        client_id: this.CLIENT_ID,
                        client_secret: this.CLIENT_SECRET
                    }, {
                        ssoUrl: this.SSO_LOCATION
                    });
                    this._AuthMap.set(this.environment, server);
                    return server;
                }
            }
        }
    }
    loadExtendedConfigurationsFromEnvironment() {
        return __awaiter(this, void 0, void 0, function* () {
            this.SSO_LOCATION = this.environment === 'server' ?
                // eslint-disable-next-line no-use-before-define
                (process.env[this.getConfigurationProperty_ENV_Alias('SSO_LOCATION')] || this.SSO_LOCATION)
                : this.SSO_LOCATION;
        });
    }
    loadExtendedConfigurationsFromFile(config) {
        return __awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-use-before-define
            this.SSO_LOCATION = this.environment === 'server' ?
                // eslint-disable-next-line no-use-before-define
                config[this.getConfigurationProperty_File_Alias('SSO_LOCATION')] || this.SSO_LOCATION
                : this.SSO_LOCATION;
        });
    }
}
exports.A_AUTH_ContextClass = A_AUTH_ContextClass;
exports.A_AUTH_Context = new A_AUTH_ContextClass();
//# sourceMappingURL=A_AUTH_Context.class.js.map