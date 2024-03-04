import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    currentLocation: "/",
  },
  reducers: {
    setCurentLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurentLocation } = navigationSlice.actions;

export default navigationSlice.reducer;
