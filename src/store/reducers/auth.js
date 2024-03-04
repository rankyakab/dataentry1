import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false,
    user: {},
    loading: false,
    error: "",
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1;
    },
    authenticate: (state, { payload }) => {
      state.authenticated = true;
      state.user = { ...payload };
    },
    startUpdateContact: (state, { payload }) => {
      state.loading = true;
    },
    updatContactSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = "";
      state.user = { ...payload };
    },
    updatContactFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    startUpdateContact: (state, { payload }) => {
      state.loading = true;
    },
    startUpdateVendor: (state, { payload }) => {
      state.loading = true;
    },
    updateVendorSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = "";
      state.user = { ...payload };
    },
    updateVendorFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.loading = false;
      state.error = "";
    },

    logOut: (state) => {
      state.authenticated = false;
      state.user = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  authenticate,
  logOut,
  startUpdateContact,
  updatContactSuccess,
  updatContactFailure,
  startUpdateVendor,
  updateVendorSuccess,
  updateVendorFailure,
  reset,
} = authSlice.actions;

export default authSlice.reducer;
