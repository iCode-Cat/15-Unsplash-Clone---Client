import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../Redux/imagesSlice';

export default configureStore({
  reducer: {
    image: imageReducer,
  },
});
