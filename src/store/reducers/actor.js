import { createSlice } from "@reduxjs/toolkit";

export const actorSlice = createSlice({
  name: "actor",
  initialState: {
    actorList: [],
    loading: false,
    error: null,
    isSubmitting: false,
  },
  reducers: {
    getActorsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getActorsSuccess(state, action) {
      state.actorList = action.payload;
      state.loading = false;
    },
    getActorsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setAdminList: (state, { payload }) => {
      console.log("this is the payload for actors", payload);
      state.actorList = payload;
    },
    //for delete
    deleteAdminStart: (state) => {
      state.loading = true;
    },
    deleteAdminSuccess: (state, action) => {
      const actorId = action.payload;
      state.loading = false;
      state.actorList = state.actorList.filter(
        (actor) => actor._id !== actorId
      );
      state.error = null;
    },
    deleteAdminFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createAdminStart: (state) => {
      state.loading = true;
      state.error = null;
      state.isSubmitting = true;
    },
    createAdminSuccess: (state, action) => {
      state.loading = false;
      state.actorList.push(action.payload);
      state.error = null;
      state.isSubmitting = false;
    },
    createAdminFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isSubmitting = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAdminList,
  getActorsStart,
  getActorsFailure,
  getActorsSuccess,
  deleteAdminStart,
  deleteAdminSuccess,
  deleteAdminFailure,
  createAdminStart,
  createAdminSuccess,
  createAdminFailure,
} = actorSlice.actions;

export default actorSlice.reducer;
