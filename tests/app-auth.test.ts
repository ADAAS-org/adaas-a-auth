import { config } from 'dotenv';
config();
import { A_AUTH_Authenticator } from '../src/api/';
jest.retryTimes(0);

describe('Auth Basic Methods to implement SSO', () => {
    it('Should receive Auth SSO URL depending on the app credentials', async () => {

        const resp = await A_AUTH_Authenticator.getSignInUrl('http://local.a-blog.org/callback/adaas');

        expect(resp).toBeDefined();

    });
});