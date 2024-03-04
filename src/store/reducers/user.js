import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userList: [],
    loading: false,
    error: null,
  },
  reducers: {
    getUsersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getUsersSuccess(state, action) {
      state.userList = action.payload;
      state.loading = false;
    },
    getUsersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setUserList: (state, { payload }) => {
      console.log("this is the payload forusers", payload);
      state.adminList = payload;
    },
    //for delete
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      const userId = action.payload;
      state.loading = false;
      state.adminList = state.adminList.filter((admin) => admin._id !== userId);   //emmanuel changes from user._id to admin._id
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createUserStart: () => {},
    createUserSuccess: () => {},
    createUserFailure: () => {},

    //suspend user
    suspendUserStart: (state) => {
      state.loading = true;
    },
    suspendUserSuccess: (state, action) => {
      state.userList = action.payload;
      state.loading = false;
      state.error = null;
    },
    suspendUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserList,
  getUsersStart,
  getUsersFailure,
  getUsersSuccess,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  createUserStart,
  createUserSuccess,
  createUserFailure,
  suspendUserStart,
  suspendUserSuccess,
  suspendUserFailure,
} = userSlice.actions;

export default userSlice.reducer;
