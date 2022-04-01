import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const channelsAdapter = createEntityAdapter()

const counterSlice = createSlice({
  name: 'channels',
  initialState: channelsAdapter.getInitialState(),
  reducers: {
    fetchChannels: channelsAdapter.setAll,
  },
});

export const { fetchChannels } = counterSlice.actions;

export default counterSlice.reducer;
