import { config } from 'dotenv';
config();
jest.retryTimes(0);
import fs from 'fs';
import path from 'path';
import { A_AUTH_Context } from '@adaas/a-auth/global/A_AUTH_Context.class';
import { A_AUTH_Error } from '@adaas/a-auth/global/A_AUTH_Error.class';

describe('Authorization with APP API Credentials', () => {

    it('Should FAIL auth', async () => {
        try {
            const testContext = new A_AUTH_Context();

            testContext.setCredentials(
                "ADAAS",
                "ADAAS"
            );

            await testContext.authenticate();
        } catch (error) {
            expect(error).toBeInstanceOf(A_AUTH_Error);
            expect(error).not.toBeNull();
        }
    });

    it('Should auth with direct credentials', async () => {

        const testContext = new A_AUTH_Context();
        const API_CREDENTIALS_CLIENT_ID = process.env.API_CREDENTIALS_CLIENT_ID!;
        const API_CREDENTIALS_CLIENT_SECRET = process.env.API_CREDENTIALS_CLIENT_SECRET!;

        testContext.setCredentials(
            API_CREDENTIALS_CLIENT_ID,
            API_CREDENTIALS_CLIENT_SECRET
        )

        await testContext.authenticate();

        expect(testContext.token).toBeDefined();
        expect(testContext.token).not.toBeNull();
        expect(testContext.token).not.toEqual('');
    });

    it('Should auth with FILE credentials', async () => {

        const API_CREDENTIALS_CLIENT_ID = process.env.API_CREDENTIALS_CLIENT_ID!;
        const API_CREDENTIALS_CLIENT_SECRET = process.env.API_CREDENTIALS_CLIENT_SECRET!;

        const credentials = {
            client_id: API_CREDENTIALS_CLIENT_ID,
            client_secret: API_CREDENTIALS_CLIENT_SECRET
        };

        const filePath = path.join(__dirname, '../adaas.conf.json');

        // Write credentials to file
        fs.writeFileSync(filePath, JSON.stringify(credentials));


        const testContext = new A_AUTH_Context();

        await testContext.authenticate();

        expect(testContext.token).toBeDefined();
        expect(testContext.token).not.toBeNull();
        expect(testContext.token).not.toEqual('');

        // Remove the file
        fs.unlinkSync(filePath);
    });


    it('Should auth with ENV credentials', async () => {

        const testContext = new A_AUTH_Context();

        await testContext.authenticate();

        expect(testContext.token).toBeDefined();
        expect(testContext.token).not.toBeNull();
        expect(testContext.token).not.toEqual('');
    });
});