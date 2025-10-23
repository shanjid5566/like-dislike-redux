import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  totalLikes: 0,
  totalDislikes: 0,
};
const counterSlice = createSlice({
  name: "likeDislikeCounter",
  initialState,
  reducers: {
    incrementLikes: (state) => {
      state.totalLikes += 1;
    },
    incrementDislikes: (state) => {
      state.totalDislikes += 1;
    },
    resetLikeDislike: (state) => {
      state.totalLikes = 0;
      state.totalDislikes = 0;
    },
  },
});

export const { incrementLikes, incrementDislikes, resetLikeDislike } =
  counterSlice.actions;
export default counterSlice.reducer;
