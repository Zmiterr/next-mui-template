import { ErrorType } from 'types/store'

export const UserPrefix = 'USER'

export const enum UserFetchMethodsEnum {
  getUser = 'GET_USER',
}

export interface User {
  id?: string
}

export interface UserInitialState {
  loading: boolean
  error: ErrorType
  data: User | Record<string, User>
}
