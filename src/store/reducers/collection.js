import { createSlice } from "@reduxjs/toolkit";

export const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    collections: [],
    error: null,
    loading: false,
  },
  reducers: {
    getCollectionStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getCollectionSuccess(state, action) {
      state.collections = action.payload;
      state.loading = false;
      console.log("gooten aooo", state.collections);
    },
    getCollectionFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    createCollectionStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createCollectionSuccess: (state, action) => {
      state.loading = false;
      state.collections.push(action.payload);
      state.error = null;
    },
    createCollectionFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //for delete
    deleteCollectionStart: (state) => {
      state.loading = true;
    },
    deleteCollectionSuccess: (state, action) => {
      const designationId = action.payload;
      state.loading = false;
      state.collections = state.collections.filter(
        (designation) => designation._id !== designationId
      );
      state.error = null;
    },
    deleteCollectionFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //for update
    updateCollectionStart: (state) => {
      state.loading = true;
    },
    updateCollectionSuccess: (state, action) => {
      const designationId = action.payload._id;
      console.log("this is the pay load", action.payload);
      state.loading = false;
      state.collections = state.collections.map((designation) =>
        designation._id == designationId
          ? { ...designation, name: action.payload.name }
          : designation
      );
      state.error = null;
    },
    updateCollectionFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getCollectionStart,
  getCollectionSuccess,
  getCollectionFailure,

  createCollectionStart,
  createCollectionSuccess,
  createCollectionFailure,

  deleteCollectionStart,
  deleteCollectionSuccess,
  deleteCollectionFailure,

  updateCollectionStart,
  updateCollectionSuccess,
  updateCollectionFailure,
} = collectionSlice.actions;

export default collectionSlice.reducer;
