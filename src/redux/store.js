import { configureStore } from '@reduxjs/toolkit'
import likeDislikeReducer from "../redux/features/likeDislike/counterSlice"
export default configureStore({
  reducer: {
    likeDislikeCounter : likeDislikeReducer,
  }
})