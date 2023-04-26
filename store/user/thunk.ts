import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, UserFetchMethodsEnum, UserPrefix } from 'store/user/types'

export const getUserData = createAsyncThunk<User, User, { rejectValue: string }>(
  `${UserPrefix}/${UserFetchMethodsEnum.getUser}`,
  async (data) => {
    // const response = await fetch(/*...*/);

    return data
  },
)
