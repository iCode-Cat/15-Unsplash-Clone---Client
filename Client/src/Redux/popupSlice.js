import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popup_add: false,
  popup_delete: false,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    popupAdd: (state) => {
      state.popup_add = !state.popup_add;
    },
    popupDelete: (state) => {
      state.popup_delete = !state.popup_delete;
    },
  },
});

// Action creators are generated for each case reducer function
export const { popupAdd, popupDelete } = popupSlice.actions;

export default popupSlice.reducer;
