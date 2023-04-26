import { createSlice } from '@reduxjs/toolkit'
import { getUserData } from 'store/user/thunk'
import { UserInitialState, UserPrefix } from 'store/user/types'

const initialState: UserInitialState = {
  loading: false,
  error: null,
  data: {},
}

const userSlice = createSlice({
  name: UserPrefix,
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      state.data = { ...payload }
      state.loading = false
    })
    builder.addCase(getUserData.rejected, (state, { payload }) => {
      state.loading = false

      if (payload) state.error = payload
    })
  },
})

export default userSlice.reducer
