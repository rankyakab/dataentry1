import { createSlice } from "@reduxjs/toolkit";

export const messengerSlice = createSlice({
  name: "messenger",
  initialState: {
    messages: [],
    message: "",
    messengerList: [],
    loading: false,
    unread: null,
    error: null,
    messengerId: "",
    isSubmitting: false,
  },
  reducers: {
    getMessengerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getMessengerSuccess(state, action) {
      state.messengerList = action.payload;
      state.loading = false;
    },
    getMessengerFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setMessengerList: (state, { payload }) => {
      state.messengerList = payload;
    },
    innitializeMessagesStart: (state) => {
      state.loading = true;
      state.error = null;
      state.isSubmitting = true;
    },
    innitializeMessengerSuccess: (state, action) => {
      state.loading = false;
      state.messages = [...action.payload.data];
      state.messengerId = action.payload.messengerId;

      state.error = null;
      state.isSubmitting = false;
    },
    innitializeMessengerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isSubmitting = false;
    },

    createMessegesStart: (state) => {
      state.loading = true;
      state.error = null;
      state.isSubmitting = true;
    },
    createMessagesSuccess: (state, action) => {
      state.loading = false;
      state.messages.push(action.payload);
      state.message = "";
      state.error = null;
      state.isSubmitting = false;
    },
    createMessengesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isSubmitting = false;
    },
    createMessageStart: (state) => {
      state.error = null;
    },
    createMessageSuccess: (state, action) => {
      state.message = action.payload;
    },
    createMessageFailure: (state, action) => {
      state.message = action.payload;
    },

    SetMessengerIdSuccess: (state, action) => {
      state.loading = false;
      state.messengerId = action.payload;
      state.error = null;
      state.isSubmitting = false;
    },
    resetMessenger: (state) => {
      state.messages = [];
      state.message = "";
      state.messengerList = [];
      state.loading = false;
      state.unread = null;
      state.error = null;
      state.messengerId = "";
      state.isSubmitting = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  //create messgee
  createMessageStart,
  createMessageSuccess,
  createMessageFailure,
  //another batch
  createMessagesSuccess,

  //get meesages for a particular admin clicked
  getMessengerStart,
  getMessengerSuccess,
  getMessengerFailure,

  //initialisin messages as load scren
  innitializeMessagesStart,
  innitializeMessengerFailure,
  innitializeMessengerSuccess,
  // to reset the messanger completely
  resetMessenger,
} = messengerSlice.actions;

export default messengerSlice.reducer;
