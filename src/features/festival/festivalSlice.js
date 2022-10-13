import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
}

export const festivalSlice = createSlice({
  name: 'festival',
  initialState,
  reducers: {
    addFestival: (state) => {
      state.list.append(1);
    },
  },
})

export const { addFestival } = festivalSlice.actions

export default festivalSlice.reducer