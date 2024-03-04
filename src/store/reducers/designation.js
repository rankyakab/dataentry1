import { createSlice } from "@reduxjs/toolkit";

export const designationSlice = createSlice({
  name: "designation",
  initialState: {
    designations: [],
    error: null,
    loading: false,
  },
  reducers: {
    getDesignationStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getDesignationSuccess(state, action) {
      state.designations = action.payload;
      state.loading = false;
    },
    getDesignationFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    createDesignationStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createDesignationSuccess: (state, action) => {
      state.loading = false;
      state.designations.push(action.payload);
      state.error = null;
    },
    createDesignationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //for delete
    deleteDesignationStart: (state) => {
      state.loading = true;
    },
    deleteDesignationSuccess: (state, action) => {
      const designationId = action.payload;
      state.loading = false;
      state.designations = state.designations.filter(
        (designation) => designation._id !== designationId
      );
      state.error = null;
    },
    deleteDesignationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //for update
    updateDesignationStart: (state) => {
      state.loading = true;
    },
    updateDesignationSuccess: (state, action) => {
      const designationId = action.payload._id;
      console.log("this is the pay load", action.payload);
      state.loading = false;
      state.designations = state.designations.map((designation) =>
        designation._id == designationId
          ? { ...designation, name: action.payload.name }
          : designation
      );
      state.error = null;
    },
    updateDesignationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getDesignationStart,
  getDesignationSuccess,
  getDesignationFailure,

  createDesignationStart,
  createDesignationSuccess,
  createDesignationFailure,

  deleteDesignationStart,
  deleteDesignationSuccess,
  deleteDesignationFailure,

  updateDesignationStart,
  updateDesignationSuccess,
  updateDesignationFailure,
} = designationSlice.actions;

export default designationSlice.reducer;
