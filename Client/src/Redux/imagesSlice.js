import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: 0,
  loader: false,
};

export const getImages = createAsyncThunk('images', async () => {
  const response = await axios(
    'https://unsplash-devcha-api.herokuapp.com/api/image'
  );
  return response.data;
});

export const postImages = createAsyncThunk(
  'images/post',
  async (imageObject) => {
    const response = await axios.post(
      'https://unsplash-devcha-api.herokuapp.com/api/image',
      imageObject
    );
    return response.data;
  }
);

export const deleteImage = createAsyncThunk(
  'images/delete',
  async (deleteObject) => {
    console.log(deleteObject);
    const response = await axios.delete(
      'https://unsplash-devcha-api.herokuapp.com/api/image',
      { data: deleteObject }
    );
    return response.data;
  }
);

export const imagesSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    loader: (state) => {
      state.loader = true;
    },
  },
  extraReducers: (builder) => {
    // Get all images from DB
    builder.addCase(getImages.fulfilled, (state, action) => {
      state.value = action.payload;
      state.loader = false;
      console.log(action.payload);
    });
    // Post a new image
    builder.addCase(postImages.fulfilled, (state, action) => {
      state.loader = false;
      console.log(action.payload);
    });
    // Delete a image
    builder.addCase(deleteImage.fulfilled, (state, action) => {
      state.loader = false;
      console.log(action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const { loader } = imagesSlice.actions;
export default imagesSlice.reducer;
