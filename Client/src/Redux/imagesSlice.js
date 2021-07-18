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
  reducers: {},
  extraReducers: (builder) => {
    // Get all images from DB
    builder.addCase(getImages.fulfilled, (state, action) => {
      state.value = action.payload;
      console.log(action.payload);
    });
    // Post a new image
    builder.addCase(postImages.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    // Delete a image
    builder.addCase(deleteImage.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const { GET, POST, DELETE, DEFAULT } = imagesSlice.actions;

export default imagesSlice.reducer;
