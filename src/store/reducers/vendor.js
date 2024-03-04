import { createSlice } from "@reduxjs/toolkit";

export const vendorSlice = createSlice({
  name: "vendor",
  initialState: {
    vendorList: [],
    vendor: {},
    loading: false,
    error: null,
  },
  reducers: {
    getVendorsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getVendorsSuccess(state, action) {
      state.vendorList = action.payload;
      state.loading = false;
    },
    setAVendor(state, action) {
      state.vendor = { ...action.payload };
      state.loading = false;
    },
    getVendorsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setVendorList: (state, { payload }) => {
      state.adminList = payload;
    },
    //for delete
    deleteVendorStart: (state) => {
      state.loading = true;
    },
    deleteVendorSuccess: (state, action) => {
      const vendorId = action.payload;
      state.loading = false;
      state.adminList = state.adminList.filter(
        (vendor) => vendor._id !== vendorId
      );
      state.error = null;
    },
    deleteVendorFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createVendorStart: () => {},
    createVendorSuccess: () => {},
    createVendorFailure: () => {},

    //suspend vendor
    suspendVendorStart: (state) => {
      state.loading = true;
    },
    suspendVendorSuccess: (state, action) => {
      state.vendorList = action.payload;
      state.loading = false;
      state.error = null;
    },
    suspendVendorFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAVendor,
  setVendorList,
  getVendorsStart,
  getVendorsFailure,
  getVendorsSuccess,
  deleteVendorStart,
  deleteVendorSuccess,
  deleteVendorFailure,
  createVendorStart,
  createVendorSuccess,
  createVendorFailure,
  suspendVendorStart,
  suspendVendorSuccess,
  suspendVendorFailure,
} = vendorSlice.actions;

export default vendorSlice.reducer;
