
import { A_AUTH_ContextInstance } from './src/global/A_AUTH_Context.class';

export { A_AUTH_Error } from './src/global/A_AUTH_Error.class';

// To keep proper naming and prevent confusion
export const A_AUTH_Context = A_AUTH_ContextInstance;

// Export Some Global Entities
export { A_AUTH_APIProvider } from './src/global/A_AUTH_APIProvider.class';

// ============ TYPES Export ============
export { A_AUTH_TYPES__Error_ConstructorParams } from './src/types/A_AUTH_Error.types';
export {
    A_TYPES__DeepPartial,
    A_TYPES__Dictionary,
    A_TYPES__ObjectKeyEnum
} from './src/types/common.types';


// ============ API TYPES Export ============
export {
    A_AUTH_TYPES__Role_APIEntity
} from './src/api/roles/types/A_AUTH_RolesAPI.types';


// ================== API ==================
// Mainly for BE purposes it uses API paths from ENV Variables
export {
    A_AUTH_Authenticator,
    A_AUTH_RolesAPI,
    A_AUTH_AppsAPI
} from './src/api';


// ============ API CLASSES Export ============
// Mainly for FE purposes it uses API directly from class constructor
export { A_AUTH_AuthenticatorClass } from './src/api/A_AUTH_Authenticator.class';
export { A_AUTH_RolesAPIClass } from './src/api/roles/A_AUTH_Roles.api';
export { A_AUTH_AppsAPIClass } from './src/api/apps/A_AUTH_Apps.api';
