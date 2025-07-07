import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { CarBlogPost } from '@/types/Cartypes';

// Example async thunk for fetching posts from an API
export const fetchCarBlogPosts = createAsyncThunk<CarBlogPost[]>(
  'carBlogPosts/fetchAll',
  async () => {
    const response = await fetch('http://172.50.3.32:3001/api/cars'); 
    if (!response.ok) throw new Error('Failed to fetch car blog posts');
    return response.json();
  }
);

type CarBlogPostsState = {
  posts: CarBlogPost[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: CarBlogPostsState = {
  posts: [],
  status: 'idle',
  error: null,
};

const carBlogPostsSlice = createSlice({
  name: 'carBlogPosts',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder
      .addCase(fetchCarBlogPosts.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCarBlogPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchCarBlogPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to load posts';
      });
  },
});

export default carBlogPostsSlice.reducer;
