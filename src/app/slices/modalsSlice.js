import { createSlice } from '@reduxjs/toolkit';

const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    status: null,
  },
  reducers: {
    updateStatus: ((state, action) => {
      state.status = action.payload;
    }),
  },
});

export const { updateStatus } = modalsSlice.actions;

export default modalsSlice.reducer;
