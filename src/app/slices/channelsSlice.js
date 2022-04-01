import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const channelsAdapter = createEntityAdapter()

const counterSlice = createSlice({
  name: 'channels',
  initialState: channelsAdapter.getInitialState(),
  reducers: {
    fetchChannelsData: channelsAdapter.setAll,
    fetchCurrentChannelId: channelsAdapter.updateOne
  },
});

export const { fetchChannelsData } = counterSlice.actions;

export default counterSlice.reducer;
