class LibPolyfillClass {

    private _fs!: typeof import('fs');


    async fs() {
        if (!this._fs) {
            await this.init();
        }
        return this._fs;
    }


    private async init() {
        if (typeof window === 'undefined') {
            // We are in a Node.js environment
            this._fs = await import('fs');
        } else {
            // We are in a browser environment
            this._fs = {
                readFileSync: () => {
                    throw new Error('fs.readFile is not available in the browser');
                },
                existsSync: () => {
                    throw new Error('fs.existsSync is not available in the browser');
                }
            } as any;
        }
    }
}


export const LibPolyfill = new LibPolyfillClass();