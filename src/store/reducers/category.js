import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    error: null,
    loading: false,
  },
  reducers: {
    getCategoryStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getCategorySuccess(state, action) {
      state.categories = action.payload;
      state.loading = false;
      console.log("gooten aooo", state.categories);
    },
    getCategoryFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    createCategoryStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createCategorySuccess: (state, action) => {
      state.loading = false;
      state.categories.push(action.payload);
      state.error = null;
    },
    createCategoryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //for delete
    deleteCategoryStart: (state) => {
      state.loading = true;
    },
    deleteCategorySuccess: (state, action) => {
      const designationId = action.payload;
      state.loading = false;
      state.categories = state.categories.filter(
        (designation) => designation._id !== designationId
      );
      state.error = null;
    },
    deleteCategoryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //for update
    updateCategoryStart: (state) => {
      state.loading = true;
    },
    updateCategorySuccess: (state, action) => {
      const designationId = action.payload._id;
      console.log("this is the pay load", action.payload);
      state.loading = false;
      state.categories = state.categories.map((designation) =>
        designation._id == designationId
          ? { ...designation, name: action.payload.name }
          : designation
      );
      state.error = null;
    },
    updateCategoryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getCategoryStart,
  getCategorySuccess,
  getCategoryFailure,

  createCategoryStart,
  createCategorySuccess,
  createCategoryFailure,

  deleteCategoryStart,
  deleteCategorySuccess,
  deleteCategoryFailure,

  updateCategoryStart,
  updateCategorySuccess,
  updateCategoryFailure,
} = categorySlice.actions;

export default categorySlice.reducer;
