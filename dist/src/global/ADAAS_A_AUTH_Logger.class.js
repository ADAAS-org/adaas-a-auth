"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADAAS_A_AUTH_Logger = void 0;
const ADAAS_A_AUTH_Error_class_1 = require("./ADAAS_A_AUTH_Error.class");
class ADAAS_A_AUTH_Logger {
    constructor(verbose = true, ignoreErrors = false) {
        this.verbose = verbose;
        this.ignoreErrors = ignoreErrors;
    }
    log(...args) {
        if (!this.verbose)
            return;
        console.log('\x1b[36m%s\x1b[0m', `[ADAAS-ADF-AUTH] |${this.getTime()}| `, ...args);
    }
    warning(...args) {
        if (!this.verbose)
            return;
        console.log(`[ADAAS-ADF-AUTH] |${this.getTime()}| `, ...args);
    }
    error(...args) {
        if (this.ignoreErrors)
            return;
        const firstArg = args[0];
        if (firstArg instanceof ADAAS_A_AUTH_Error_class_1.ADAAS_A_AUTH_Error)
            this.logADAASError(firstArg);
        else
            console.log('\x1b[31m%s\x1b[0m', `[ADAAS ERROR] |${this.getTime()}| `, ...args);
    }
    logADAASError(error) {
        const time = this.getTime();
        console.log('\x1b[31m%s\x1b[0m', `[ADAAS ERROR] |${time}|`, error.code);
        console.log('\x1b[31m%s\x1b[0m', `[ADAAS ERROR] |${time}|`, error.name);
        console.log('\x1b[31m%s\x1b[0m', `[ADAAS ERROR] |${time}|`, error.description);
        if (error.link)
            console.log('\x1b[31m%s\x1b[0m', `[ADAAS ERROR] |${time}| Read in docs: `, error.link);
    }
    getTime() {
        const now = new Date();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const milliseconds = String(now.getMilliseconds()).padStart(4, '0');
        return `${minutes}:${seconds}:${milliseconds}`;
    }
}
exports.ADAAS_A_AUTH_Logger = ADAAS_A_AUTH_Logger;
//# sourceMappingURL=ADAAS_A_AUTH_Logger.class.js.map