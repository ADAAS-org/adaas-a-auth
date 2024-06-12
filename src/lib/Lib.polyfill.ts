interface Ifspolyfill {
    readFileSync: (path: string, encoding: string) => string;
    existsSync: (path: string) => boolean;
}


class LibPolyfillClass {

    private _fs!: Ifspolyfill;


    async fs() {
        if (!this._fs) {
            await this.init();
        }
        return this._fs;
    }


    private async init() {
        if (typeof window === 'undefined') {
            // We are in a Node.js environment
            this._fs = await import('fs') as Ifspolyfill;
        } else {
            // We are in a browser environment
            this._fs = {
                readFileSync: () => {
                    throw new Error('fs.readFile is not available in the browser');
                },
                existsSync: () => {
                    throw new Error('fs.existsSync is not available in the browser');
                }
            };
        }
    }
}


export const LibPolyfill = new LibPolyfillClass();