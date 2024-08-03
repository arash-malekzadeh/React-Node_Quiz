import { createSlice } from "@reduxjs/toolkit";

export const resultRducer = createSlice({
  name: "result",
  initialState: {
    userId: null,
    result: [],
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setUserId } = resultRducer.actions;
export default resultRducer.reducer;
