import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const messagesAdapter = createEntityAdapter()

const counterSlice = createSlice({
  name: 'messages',
  initialState: messagesAdapter.getInitialState(),
  reducers: {
    fetchMessages: messagesAdapter.setAll
  },
});

export const { fetchMessages } = counterSlice.actions;

export default counterSlice.reducer;
