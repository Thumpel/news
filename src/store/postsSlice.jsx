import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState, 
  reducers: {
      addPost(state,action){
       return{
        ...state,
        post:[...state.post,action.payload]
       }
      },
      deletePost(state,action){
        const postId=action.payload;
        state.post=state.post.filter(post=>post.id!==postId);
      }
      // postUpdated(state, action) {
      //   const { id, title, content } = action.payload
      //   const existingPost = state.find((post) => post.id === id)
      //   if (existingPost) {
      //     existingPost.title = title
      //     existingPost.content = content
      //   }
      // },
  },
});

export const {addPost,deletePost } = postsSlice.actions;
export default postsSlice.reducer;
