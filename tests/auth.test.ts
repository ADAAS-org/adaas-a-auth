// import { config } from 'dotenv';
// config();
// jest.retryTimes(0);
// import fs from 'fs';
// import path from 'path';
// import { ADAAS_A_AUTH_Context } from '@adaas/a-auth/global/ADAAS_A_AUTH_Context.class';
// import { ADAAS_A_AUTH_Error } from '@adaas/a-auth/global/ADAAS_A_AUTH_Error.class';

// describe('Authorization with APP API Credentials', () => {

//     it('Should FAIL auth', async () => {
//         try {
//             const testContext = new ADAAS_A_AUTH_Context();

//             testContext.setCredentials(
//                 "ADAAS",
//                 "ADAAS"
//             );

//             await testContext.authenticate();
//         } catch (error) {
//             expect(error).toBeInstanceOf(ADAAS_A_AUTH_Error);
//             expect(error).not.toBeNull();
//         }
//     });

//     it('Should auth with direct credentials', async () => {

//         const testContext = new ADAAS_A_AUTH_Context();
//         const ADAAS_API_CREDENTIALS_CLIENT_ID = process.env.ADAAS_API_CREDENTIALS_CLIENT_ID!;
//         const ADAAS_API_CREDENTIALS_CLIENT_SECRET = process.env.ADAAS_API_CREDENTIALS_CLIENT_SECRET!;

//         testContext.setCredentials(
//             ADAAS_API_CREDENTIALS_CLIENT_ID,
//             ADAAS_API_CREDENTIALS_CLIENT_SECRET
//         )

//         await testContext.authenticate();

//         expect(testContext.token).toBeDefined();
//         expect(testContext.token).not.toBeNull();
//         expect(testContext.token).not.toEqual('');
//     });

//     it('Should auth with FILE credentials', async () => {

//         const ADAAS_API_CREDENTIALS_CLIENT_ID = process.env.ADAAS_API_CREDENTIALS_CLIENT_ID!;
//         const ADAAS_API_CREDENTIALS_CLIENT_SECRET = process.env.ADAAS_API_CREDENTIALS_CLIENT_SECRET!;

//         const credentials = {
//             client_id: ADAAS_API_CREDENTIALS_CLIENT_ID,
//             client_secret: ADAAS_API_CREDENTIALS_CLIENT_SECRET
//         };

//         const filePath = path.join(__dirname, '../adaas.conf.json');

//         // Write credentials to file
//         fs.writeFileSync(filePath, JSON.stringify(credentials));


//         const testContext = new ADAAS_A_AUTH_Context();

//         await testContext.authenticate();

//         expect(testContext.token).toBeDefined();
//         expect(testContext.token).not.toBeNull();
//         expect(testContext.token).not.toEqual('');

//         // Remove the file
//         fs.unlinkSync(filePath);
//     });


//     it('Should auth with ENV credentials', async () => {

//         const testContext = new ADAAS_A_AUTH_Context();

//         await testContext.authenticate();

//         expect(testContext.token).toBeDefined();
//         expect(testContext.token).not.toBeNull();
//         expect(testContext.token).not.toEqual('');
//     });
// });