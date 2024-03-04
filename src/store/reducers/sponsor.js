import { createSlice } from "@reduxjs/toolkit";

export const sponsorSlice = createSlice({
  name: "sponsor",
  initialState: {
    actorId: "",
    startDate: "",
    endDate: "",
    budget: "",
    productId: "",
    loading: false,
    status: "",

    error: null,
  },
  reducers: {
    setSponsorDetails: (state, { payload }) => {
      state.actorId = payload.actorId;
      state.startDate = payload.startDate;
      state.endDate = payload.endDate;
      state.budget = payload.budget;
      state.productId = payload?.productId || "";
    },

    createSponsorStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createSponsorSuccess: (state, action) => {
      state.loading = false;
      state.status = "success";
      state.error = null;
    },
    createSponsorFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.status = "failed";
    },
    resetSponsor: (state) => {
      state.actorId = "";
      state.startDate = "";
      state.endDate = "";
      state.budget = "";
      state.loading = false;
      state.error = "";
      state.productId = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  createSponsorStart,
  createSponsorSuccess,
  createSponsorFailure,
  resetSponsor,
  setSponsorDetails,
} = sponsorSlice.actions;

export default sponsorSlice.reducer;
