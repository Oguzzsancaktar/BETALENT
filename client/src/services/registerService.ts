import { IRegister } from '@/models'
import { axiosBaseQuery, IAxiosBaseQueryFn } from '@/services/AxiosBaseQuery'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { createApi } from '@reduxjs/toolkit/query/react'

const REGISTER_API_REDUCER_PATH = 'registerApi'
const REGISTER_TAG = 'registerTag' as const

type IBuilder = EndpointBuilder<IAxiosBaseQueryFn, typeof REGISTER_TAG, typeof REGISTER_API_REDUCER_PATH>

const registerList = (builder: IBuilder) => {
  return builder.query<IRegister[], void>({
    query() {
      return {
        url: '/register',
        method: 'GET'
      }
    },
    providesTags(result) {
      if (!result) return [{ type: REGISTER_TAG, id: 'LIST' }]
      return [...result.map(({ _id }) => ({ type: REGISTER_TAG, id: _id })), { type: REGISTER_TAG, id: 'LIST' }]
    }
  })
}

const createRegister = (builder: IBuilder) => {
  return builder.mutation<string, IRegister>({
    query(registerDto) {
      return {
        url: '/register',
        method: 'POST',
        data: registerDto
      }
    },
    invalidatesTags(result) {
      return [{ type: REGISTER_TAG, id: 'LIST' }]
    }
  })
}

const registerApi = createApi({
  reducerPath: REGISTER_API_REDUCER_PATH,
  tagTypes: [REGISTER_TAG],
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    registerList: registerList(builder),
    createRegister: createRegister(builder)
  })
})

const { useRegisterListQuery, useCreateRegisterMutation } = registerApi
export { registerApi, useRegisterListQuery, useCreateRegisterMutation }
