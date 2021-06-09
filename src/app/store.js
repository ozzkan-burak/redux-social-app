import { configureStore } from '@reduxjs/toolkit'
// reducers
import postsReducer from "../features/posts/postsSlice";
import userReducer from "../features/users/userSlices";

export default configureStore({
  reducer:{
    posts:postsReducer,
    users: userReducer,
  },
})
