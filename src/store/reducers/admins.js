import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    adminList: [],
    loading: false,
    error: null,
    isSubmitting: false,
  },
  reducers: {
    getAdminsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getAdminsSuccess(state, action) {
      state.adminList = action.payload;
      state.loading = false;
    },
    getAdminsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setAdminList: (state, { payload }) => {
      console.log("this is the payload for admins", payload);
      state.adminList = payload;
    },
    //for delete
    deleteAdminStart: (state) => {
      state.loading = true;
    },
    deleteAdminSuccess: (state, action) => {
      const adminId = action.payload;
      state.loading = false;
      state.adminList = state.adminList.filter(
        (admin) => admin._id !== adminId
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
      state.adminList.push(action.payload);
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
  getAdminsStart,
  getAdminsFailure,
  getAdminsSuccess,
  deleteAdminStart,
  deleteAdminSuccess,
  deleteAdminFailure,
  createAdminStart,
  createAdminSuccess,
  createAdminFailure,
} = adminSlice.actions;

export default adminSlice.reducer;
