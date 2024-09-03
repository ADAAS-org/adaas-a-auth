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
exports.A_AUTH_ContextClass = void 0;
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
        this.ENABLE_AUTH = true;
        this.responseFormatter = (response) => response.data;
        this.errorsHandler = (error) => { throw new a_sdk_types_1.A_SDK_ServerError(error); };
        this.authContextAllowedProperties = [
            ...this.defaultAllowedToReadProperties,
            "SSO_LOCATION",
            "ENABLE_AUTH"
        ];
        this._AuthMap = new Map();
    }
    awaitNestedDependencies() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.global.ready;
        });
    }
    /**
      * Configures the SDK with the provided parameters or uses the default ones
      * Useful for Front End applications to omit env variables and use the SDK
      *
      * @param verbose
      * @param ignoreErrors
      * @param sdkValidation
      */
    configure(config) {
        var _a;
        if (this.hasInherited(A_AUTH_ContextClass))
            this.Logger.log('Configuring A_AUTH_Context with provided configurations', config);
        this.SSO_LOCATION = ((_a = config.auth) === null || _a === void 0 ? void 0 : _a.location) || this.SSO_LOCATION;
        this.ENABLE_AUTH = config.auth
            ? config.auth.enable !== undefined
                ? config.auth.enable
                : this.ENABLE_AUTH
            : this.ENABLE_AUTH;
        super.configure(config);
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
        this.Logger.log('Getting Authenticator for the environment', this.environment);
        switch (true) {
            /**
             * In this case it should be Front End SDK with token received from Auth API
             */
            case this.environment === 'browser': {
                const existedAuth = this._AuthMap.get(this.environment);
                if (existedAuth)
                    return existedAuth;
                else {
                    const frontendAuth = new A_AUTH_AppInteractions_authenticator_1.A_AUTH_AppInteractionsAuthenticator(this, {
                        client_id: this.CLIENT_ID,
                        client_secret: this.CLIENT_SECRET
                    }, {
                        ssoUrl: this.SSO_LOCATION
                    });
                    this._AuthMap.set(this.environment, frontendAuth);
                    this.Logger.log('Frontend Authenticator created');
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
                    const delegate = new A_AUTH_ServerDelegate_authenticator_1.A_AUTH_ServerDelegateAuthenticator(this, {
                        client_id: this.CLIENT_ID,
                        client_secret: this.CLIENT_SECRET,
                        userASEID: userASEID,
                        userScope: userScope
                    }, {
                        ssoUrl: this.SSO_LOCATION
                    });
                    this._AuthMap.set(userASEID, delegate);
                    this.Logger.log('Server Delegate Authenticator created');
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
                    const server = new A_AUTH_ServerCommands_authenticator_1.A_AUTH_ServerCommandsAuthenticator(this, {
                        client_id: this.CLIENT_ID,
                        client_secret: this.CLIENT_SECRET
                    }, {
                        ssoUrl: this.SSO_LOCATION
                    });
                    this._AuthMap.set(this.environment, server);
                    this.Logger.log('Server Authenticator created');
                    return server;
                }
            }
        }
    }
    setAuthenticator(data) {
        var _a;
        if (!this.ENABLE_AUTH)
            return;
        this.Logger.log('Setting Authenticator for the environment', this.environment);
        if (!data.token || !data.exp || this.environment !== 'browser') {
            this.Logger.log('Token or Exp is not provided or environment is not browser');
            return;
        }
        try {
            localStorage.setItem('x-adaas-access', data.token);
            localStorage.setItem('x-adaas-refresh', data.refreshToken || '');
            const existedAuth = this._AuthMap.get(this.environment);
            if (existedAuth && existedAuth instanceof A_AUTH_AppInteractions_authenticator_1.A_AUTH_AppInteractionsAuthenticator) {
                (_a = existedAuth.schedule) === null || _a === void 0 ? void 0 : _a.clear();
                const frontendAuth = new A_AUTH_AppInteractions_authenticator_1.A_AUTH_AppInteractionsAuthenticator(this, {}, {
                    ssoUrl: this.SSO_LOCATION
                });
                this._AuthMap.set(this.environment, frontendAuth);
                this.Logger.log('Frontend Authenticator created');
            }
        }
        catch (error) {
            this.Logger.error(new a_sdk_types_1.A_SDK_Error(error));
        }
    }
    loadExtendedConfigurationsFromEnvironment() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.Logger.log('Loading Extended Configurations from Environment');
                this.SSO_LOCATION = this.environment === 'server' ?
                    // eslint-disable-next-line no-use-before-define
                    (process.env[this.getConfigurationProperty_ENV_Alias('SSO_LOCATION')] || this.SSO_LOCATION)
                    : this.SSO_LOCATION;
                this.ENABLE_AUTH = this.environment === 'server' ?
                    // eslint-disable-next-line no-use-before-define
                    (process.env[this.getConfigurationProperty_ENV_Alias('ENABLE_AUTH')] ?
                        process.env[this.getConfigurationProperty_ENV_Alias('ENABLE_AUTH')] === 'true' ?
                            true : false
                        : this.ENABLE_AUTH)
                    : this.ENABLE_AUTH;
            }
            catch (error) {
                // TODO fix error handling
                error;
            }
        });
    }
    loadExtendedConfigurationsFromFile(config) {
        return __awaiter(this, void 0, void 0, function* () {
            this.Logger.log('Loading Extended Configurations from File');
            // eslint-disable-next-line no-use-before-define
            this.SSO_LOCATION = this.environment === 'server' ?
                // eslint-disable-next-line no-use-before-define
                config[this.getConfigurationProperty_File_Alias('SSO_LOCATION')] || this.SSO_LOCATION
                : this.SSO_LOCATION;
            // eslint-disable-next-line no-use-before-define
            this.ENABLE_AUTH = this.environment === 'server' ?
                // eslint-disable-next-line no-use-before-define
                (config[this.getConfigurationProperty_File_Alias('ENABLE_AUTH')] ?
                    (config[this.getConfigurationProperty_File_Alias('ENABLE_AUTH')] === 'true'
                        ||
                            config[this.getConfigurationProperty_File_Alias('ENABLE_AUTH')] === true) ?
                        true : false
                    : this.ENABLE_AUTH)
                : this.ENABLE_AUTH;
        });
    }
}
exports.A_AUTH_ContextClass = A_AUTH_ContextClass;
//# sourceMappingURL=A_AUTH_Context.class.js.map