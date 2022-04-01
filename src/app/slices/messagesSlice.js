import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const messagesAdapter = createEntityAdapter()

const counterSlice = createSlice({
  name: 'messages',
  initialState: messagesAdapter.getInitialState(),
  reducers: {
    fetchMessages: messagesAdapter.setAll,
    addMessage: messagesAdapter.addOne
  },
});

export const { fetchMessages, addMessage } = counterSlice.actions;

export const selectors = messagesAdapter.getSelectors((state) => state.messages);

export default counterSlice.reducer;
