import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const counterSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    fetchMessage: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { fetchMessage } = counterSlice.actions;

export default counterSlice.reducer;
