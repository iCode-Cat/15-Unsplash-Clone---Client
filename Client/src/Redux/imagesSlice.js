import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: 0,
};

export const getImages = createAsyncThunk('images', async () => {
  const response = await axios(
    'https://unsplash-devcha-api.herokuapp.com/api/image'
  );
  return response.data;
});

export const postImages = createAsyncThunk(
  'images/post',
  async (label, imageName) => {
    console.log(imageName);
    const response = await axios.post(
      'https://unsplash-devcha-api.herokuapp.com/api/image'
    );
    return response.data;
  }
);

export const imagesSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    GET: (state, arg) => {
      state.value = arg;
    },
    POST: (state) => {
      state.value = 'image_post';
    },
    DELETE: (state) => {
      state.value = 'image_delete';
    },
    DEFAULT: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getImages.fulfilled, (state, action) => {
      // Add user to the state array
      state.value = action.payload;
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(postImages.fulfilled, (state, action) => {
      // Add user to the state array
    });
  },
});

// Action creators are generated for each case reducer function
export const { GET, POST, DELETE, DEFAULT } = imagesSlice.actions;

export default imagesSlice.reducer;
