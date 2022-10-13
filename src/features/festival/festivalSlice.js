import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
}

export const festivalSlice = createSlice({
  name: 'festival',
  initialState,
  reducers: {
    addFestival: (state, action) => {
      state.list = [...state.list, action.payload];
      console.log(state.list);
    },
  },
})

export const { addFestival } = festivalSlice.actions

export default festivalSlice.reducer