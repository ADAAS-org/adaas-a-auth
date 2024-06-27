import { A_AUTH_Context } from '@adaas/a-auth/global/A_AUTH_Context.class';
import { config } from 'dotenv';
config();
jest.retryTimes(0);

// TODO: =======================================REPLACE WITH NEW VERSION=======================================


describe('Auth Basic Methods to implement SSO', () => {
    it('Should receive Auth SSO URL depending on the app credentials', async () => {
        await A_AUTH_Context.ready;

    });
});