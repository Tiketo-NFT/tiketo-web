import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  address: '',
  balance: 0,
  tickets: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.balance += 1
    },
    faucet: (state) => {
      state.balance -= 1
    },
    buyTicket: (state, action) => {
      state.balance += action.payload
    },
  },
})

export const { login, faucet, buyTicket } = userSlice.actions

export default userSlice.reducer