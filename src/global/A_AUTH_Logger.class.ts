import { A_AUTH_Error } from "./A_AUTH_Error.class";

export class A_AUTH_Logger {



    constructor(
        protected verbose: boolean = true,
        protected ignoreErrors: boolean = false
    ) {

    }


    log(...args) {
        if (!this.verbose)
            return;

        console.log('\x1b[36m%s\x1b[0m', `[ADAAS-ADF-AUTH] |${this.getTime()}| `, ...args)
    }

    warning(...args) {
        if (!this.verbose)
            return;

        console.log(`[ADAAS-ADF-AUTH] |${this.getTime()}| `, ...args)
    }

    error(...args) {
        if (this.ignoreErrors)
            return;

        const firstArg = args[0];

        if (firstArg instanceof A_AUTH_Error)
            this.logADAASError(firstArg)
        else
            console.log('\x1b[31m%s\x1b[0m', `[ADAAS ERROR] |${this.getTime()}| `, ...args)
    }


    private logADAASError(error: A_AUTH_Error) {
        const time = this.getTime();

        console.log('\x1b[31m%s\x1b[0m', `[ADAAS ERROR] |${time}|`, error.code);
        console.log('\x1b[31m%s\x1b[0m', `[ADAAS ERROR] |${time}|`, error.name);
        console.log('\x1b[31m%s\x1b[0m', `[ADAAS ERROR] |${time}|`, error.description);
        if (error.link)
            console.log('\x1b[31m%s\x1b[0m', `[ADAAS ERROR] |${time}| Read in docs: `, error.link);
    }



    private getTime() {
        const now = new Date();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const milliseconds = String(now.getMilliseconds()).padStart(4, '0');
        return `${minutes}:${seconds}:${milliseconds}`;
    }
}