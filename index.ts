
import { A_AUTH_ContextInstance } from './src/global/A_AUTH_Context.class';

export { A_AUTH_Error } from './src/global/A_AUTH_Error.class';

// To keep proper naming and prevent confusion
export const A_AUTH_Context = A_AUTH_ContextInstance;

// ============ TYPES Export ============
export { A_AUTH_TYPES__Error_ConstructorParams } from './src/types/A_AUTH_Error.types';
export {
    A_TYPES__DeepPartial,
    A_TYPES__Dictionary,
    A_TYPES__ObjectKeyEnum
} from './src/types/common.types';

// ============ API Export ============
export { A_AUTH_Authenticator } from './src/api/A_AUTH_Authenticator.class';
