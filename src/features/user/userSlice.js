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
    addTicket: (state, action) => {
      const item = action.payload;
      if (!state.tickets.includes(item)) {
        state.tickets = [...state.tickets, action.payload];
      }
    },
  },
})

export const { login, faucet, buyTicket, addTicket } = userSlice.actions

export default userSlice.reducer