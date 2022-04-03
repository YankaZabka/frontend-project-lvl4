import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { removeChannel } from './channelsSlice.js';

const messagesAdapter = createEntityAdapter();

const counterSlice = createSlice({
  name: 'messages',
  initialState: messagesAdapter.getInitialState(),
  reducers: {
    fetchMessages: messagesAdapter.setAll,
    addMessage: messagesAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder.addCase(removeChannel, (state, action) => {
      const channelId = action.payload;

      const restEntities = Object.values(state.entities)
        .filter((item) => item.channelId !== channelId);
      messagesAdapter.setAll(state, restEntities);
    });
  },
});

export const { fetchMessages, addMessage } = counterSlice.actions;

export const selectors = messagesAdapter.getSelectors((state) => state.messages);

export default counterSlice.reducer;
