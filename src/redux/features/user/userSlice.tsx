import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    email: string,
    token: string,
}

const initialState: UserState = {
  email: "",
  token: ""
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserState>) => {
    state.email = action.payload.email;
    state.token = action.payload.token;
  },
  },
})

// Action creators are generated for each case reducer function
export const { loginUser } = userSlice.actions

export default userSlice.reducer