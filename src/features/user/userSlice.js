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
    login: (state, action) => {
      const { address, balance } = action.payload;
      state.address = address;
      state.balance = balance;
    },
    faucet: (state) => {
      state.balance -= 1
    },
    buyTicket: (state, action) => {
      const { ticketInfo, additionalInfo } = action.payload;
      const pushedItem = { ticketInfo, additionalInfo };
      console.log(ticketInfo)
      console.log(additionalInfo)
      if (!state.tickets.includes(pushedItem)) {
        state.tickets.push({ ticketInfo, additionalInfo });
      }
    },
  },
})

export const { login, faucet, buyTicket } = userSlice.actions

export default userSlice.reducer