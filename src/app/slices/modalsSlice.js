/* eslint no-param-reassign: 0 */
import { createSlice } from '@reduxjs/toolkit';

const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    status: null,
    item: {},
  },
  reducers: {
    updateStatus: ((state, action) => {
      state.status = action.payload;
    }),
    updateItem: ((state, action) => {
      state.item = action.payload;
    }),
  },
});

export const { updateStatus, updateItem } = modalsSlice.actions;

export default modalsSlice.reducer;
