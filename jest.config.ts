import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    verbose: true,

    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleNameMapper: {
        "@adaas/a-auth/constants/(.*)": ["<rootDir>/src/constants/$1"],
        "@adaas/a-auth/api/(.*)": ["<rootDir>/src/api/$1"],
        "@adaas/a-auth/entities/(.*)": ["<rootDir>/src/entities/$1"],
        "@adaas/a-auth/global/(.*)": ["<rootDir>/src/global/$1"],
        "@adaas/a-auth/types/(.*)": ["<rootDir>/src/types/$1"],
        "@adaas/a-auth/helpers/(.*)": ["<rootDir>/src/helpers/$1"],
        "@adaas/a-auth/definitions/(.*)": ["<rootDir>/src/definitions/$1"],
    }

};
export default config;