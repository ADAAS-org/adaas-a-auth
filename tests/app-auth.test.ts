import { config } from 'dotenv';
config();
import { ADAAS_A_AUTH_Authenticator } from '../';
jest.retryTimes(0);

describe('Auth Basic Methods to implement SSO', () => {
    it('Should receive Auth SSO URL depending on the app credentials', async () => {

        const resp = await ADAAS_A_AUTH_Authenticator.getSSOUrl('http://a-blog.app');

        expect(resp).toBeDefined();

    });
});