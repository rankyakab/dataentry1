import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    messages: null,
    adminRequestToSuspendVendor: null,
    unactivatedVendorNotice: null,
    flagedMessageNotice: null,
    totalVendorNoticeForAdmin: null,
    totalVendorNoticeForSuperAdmin: null,
    userRequestToSuspendVendor: null,
    usersAwaitingActivationCount: null,
    untreatedUsersReport: null,
    totalUsersNotification: null,
    untreatedVendorCollection: null,
  },
  reducers: {
    setUnreadMessage: (state, action) => {
      state.messages = action.payload;
    },
    setVendorNotification(state, action) {
      state.adminRequestToSuspendVendor =
        action?.payload?.adminRequestToSuspendVendor || null;
      state.unactivatedVendorNotice =
        action?.payload?.unactivatedVendorNotice || null;

      state.flagedMessageNotice = action?.payload?.flagedMessageNotice || null;
      state.totalVendorNoticeForAdmin =
        action?.payload?.totalVendorNoticeForAdmin || null;

      state.totalVendorNoticeForSuperAdmin =
        action?.payload?.totalVendorNoticeForSuperAdmin || null;
      state.userRequestToSuspendVendor =
        action?.payload?.userRequestToSuspendVendor || null;
    },
    setUserNotification(state, action) {
      state.usersAwaitingActivationCount =
        action?.payload?.usersAwaitingActivationCount || null;
      state.untreatedUsersReport = action?.payload?.untreatedUserReport || null;
      state.totalUsersNotification =
        action?.payload?.untreatedUserReport +
          action?.payload?.usersAwaitingActivationCount >
        0
          ? action?.payload?.untreatedUserReport +
            action?.payload?.usersAwaitingActivationCount
          : null;
    },
    setCollectionNotification(state, action) {
      state.untreatedVendorCollection =
        action?.payload?.collectionsAwaitingTreatmentCount || null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUnreadMessage,
  setVendorNotification,
  setUserNotification,
  setCollectionNotification,
} = notificationSlice.actions;

export default notificationSlice.reducer;
