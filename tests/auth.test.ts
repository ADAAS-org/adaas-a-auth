// import { A_AUTH_ContextClass } from '@adaas/a-auth/global/A_AUTH_Context.class';
// import { config } from 'dotenv';
// config();
// jest.retryTimes(0);
// import fs from 'fs';
// import path from 'path';

// // TODO: =======================================REPLACE WITH NEW VERSION=======================================

// describe('Authorization with APP API Credentials', () => {

//     it('Should FAIL auth', async () => {
//         try {
//             const testContext = new A_AUTH_ContextClass();

//             testContext.setCredentials({
//                 client_id: "ADAAS",
//                 client_secret: "ADAAS"
//             });

//             await testContext.authenticate();
//         } catch (error) {
//             expect(error).toBeInstanceOf(A_AUTH_Error);
//             expect(error).not.toBeNull();
//         }
//     });

//     it('Should auth with direct credentials', async () => {

//         const testContext = new A_AUTH_Context();
//         const API_CREDENTIALS_CLIENT_ID = process.env.ADAAS_API_CREDENTIALS_CLIENT_ID!;
//         const API_CREDENTIALS_CLIENT_SECRET = process.env.ADAAS_API_CREDENTIALS_CLIENT_SECRET!;

//         testContext.setCredentials(
//             API_CREDENTIALS_CLIENT_ID,
//             API_CREDENTIALS_CLIENT_SECRET
//         )

//         await testContext.authenticate();

//         expect(testContext.token).toBeDefined();
//         expect(testContext.token).not.toBeNull();
//         expect(testContext.token).not.toEqual('');
//     });

//     it('Should auth with FILE credentials', async () => {
//         const filePath = path.join(__dirname, '../adaas.conf.json');

//         try {
//             const API_CREDENTIALS_CLIENT_ID = process.env.ADAAS_API_CREDENTIALS_CLIENT_ID!;
//             const API_CREDENTIALS_CLIENT_SECRET = process.env.ADAAS_API_CREDENTIALS_CLIENT_SECRET!;

//             const credentials = {
//                 client_id: API_CREDENTIALS_CLIENT_ID,
//                 client_secret: API_CREDENTIALS_CLIENT_SECRET
//             };


//             // Write credentials to file
//             fs.writeFileSync(filePath, JSON.stringify(credentials));


//             const testContext = new A_AUTH_Context();

//             await testContext.authenticate();

//             expect(testContext.token).toBeDefined();
//             expect(testContext.token).not.toBeNull();
//             expect(testContext.token).not.toEqual('');
//             // Remove the file
//             fs.unlinkSync(filePath);
//         } catch (error) {
//             // Remove the file
//             fs.unlinkSync(filePath);
//             throw error
//         }
//     });


//     it('Should auth with ENV credentials', async () => {

//         const testContext = new A_AUTH_Context();

//         await testContext.authenticate();

//         expect(testContext.token).toBeDefined();
//         expect(testContext.token).not.toBeNull();
//         expect(testContext.token).not.toEqual('');
//     });
// });