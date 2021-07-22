import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../Redux/imagesSlice';
import popupReducer from '../Redux/popupSlice';

export default configureStore({
  reducer: {
    image: imageReducer,
    popup: popupReducer,
  },
});
