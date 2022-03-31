import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const counterSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    fetchChannelsData: (state, action) => {
      state.data = action.payload.channels;
      state.currentChannelId = action.payload.currentChannelId;
    },
  },
});

export const { fetchChannelsData } = counterSlice.actions;

export default counterSlice.reducer;
