import { userApi } from '@/services/userService'
import { authApi } from '@/services/authService'
import { registerApi } from '@/services/registerService'

const StoreMiddlewares = [authApi.middleware, userApi.middleware, registerApi.middleware]

export default StoreMiddlewares
