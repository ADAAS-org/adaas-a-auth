import { Token } from '@adaas/a-sdk/api/server-commands';
import { A_AUTH_ContextClass } from '../src/global/A_AUTH_Context.class';
import { config } from 'dotenv';
config();
jest.retryTimes(0);

describe('Authorization with APP API Credentials', () => {

    it('Should do AUTH', async () => {
        const testContext = new A_AUTH_ContextClass();

        await testContext.ready;

        const authenticator = testContext.getAuthenticator()

        await authenticator.authenticate();

        const token = await authenticator.getToken();

        await authenticator.destroy()

        expect(token).toBeDefined();
        expect(token).not.toBeNull();
        expect(token).not.toEqual('');
    });

    // it('Should auth with direct credentials', async () => {

    //     const testContext = new A_AUTH_Context();
    //     const API_CREDENTIALS_CLIENT_ID = process.env.ADAAS_API_CREDENTIALS_CLIENT_ID!;
    //     const API_CREDENTIALS_CLIENT_SECRET = process.env.ADAAS_API_CREDENTIALS_CLIENT_SECRET!;

    //     testContext.setCredentials(
    //         API_CREDENTIALS_CLIENT_ID,
    //         API_CREDENTIALS_CLIENT_SECRET
    //     )

    //     await testContext.authenticate();

    //     expect(testContext.token).toBeDefined();
    //     expect(testContext.token).not.toBeNull();
    //     expect(testContext.token).not.toEqual('');
    // });

    // it('Should auth with FILE credentials', async () => {
    //     const filePath = path.join(__dirname, '../adaas.conf.json');

    //     try {
    //         const API_CREDENTIALS_CLIENT_ID = process.env.ADAAS_API_CREDENTIALS_CLIENT_ID!;
    //         const API_CREDENTIALS_CLIENT_SECRET = process.env.ADAAS_API_CREDENTIALS_CLIENT_SECRET!;

    //         const credentials = {
    //             client_id: API_CREDENTIALS_CLIENT_ID,
    //             client_secret: API_CREDENTIALS_CLIENT_SECRET
    //         };


    //         // Write credentials to file
    //         fs.writeFileSync(filePath, JSON.stringify(credentials));


    //         const testContext = new A_AUTH_Context();

    //         await testContext.authenticate();

    //         expect(testContext.token).toBeDefined();
    //         expect(testContext.token).not.toBeNull();
    //         expect(testContext.token).not.toEqual('');
    //         // Remove the file
    //         fs.unlinkSync(filePath);
    //     } catch (error) {
    //         // Remove the file
    //         fs.unlinkSync(filePath);
    //         throw error
    //     }
    // });


    // it('Should auth with ENV credentials', async () => {

    //     const testContext = new A_AUTH_Context();

    //     await testContext.authenticate();

    //     expect(testContext.token).toBeDefined();
    //     expect(testContext.token).not.toBeNull();
    //     expect(testContext.token).not.toEqual('');
    // });
});