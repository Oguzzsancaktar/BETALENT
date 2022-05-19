import { combineReducers } from 'redux'
import { AuthReducer, ModalReducer } from '@/store'
import { authApi } from '@/services/authService'
import { userApi } from '@/services/userService'
import { registerApi } from '@/services/registerService'

const rootReducer = combineReducers({
  auth: AuthReducer,
  modal: ModalReducer,
  [registerApi.reducerPath]: registerApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer
})

export default rootReducer
