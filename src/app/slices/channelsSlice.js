import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const channelsAdapter = createEntityAdapter();

const channelsSlice = createSlice({
  name: 'channels',
  initialState: channelsAdapter.getInitialState({
    selectedChannel: 1,
  }),
  reducers: {
    fetchChannels: channelsAdapter.setAll,
    changeChannel: ((state, action) => {
      state.selectedChannel = action.payload;
    }),
  },
});

export const { fetchChannels, changeChannel } = channelsSlice.actions;

export const selectors = channelsAdapter.getSelectors((state) => state.channels);

export default channelsSlice.reducer;
