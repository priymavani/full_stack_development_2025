import {createSlice , createAsyncThunk } from "@reduxjs/toolkit";


const API_URL = "https://jsonplaceholder.typicode.com/posts"

export const fetchPosts = createAsyncThunk("post/fetchPosts" , async () => {
    const Response = await fetch(API_URL);
    return Response.json();
});


const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: [],
        loading: false,
        error: null,
    },
    reducers: {},

     extraReducers: (builder) => {
        builder
          .addCase(fetchPosts.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
          })
          .addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
});

export default postSlice.reducer;
