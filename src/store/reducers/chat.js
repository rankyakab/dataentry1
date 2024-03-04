import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    message: "",
    conversationList: [],
    loading: false,
    unread: null,
    error: null,
    conversationId: "",
    isSubmitting: false,
  },
  reducers: {
    getChatsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getChatsSuccess(state, action) {
      state.conversationList = action.payload;
      state.loading = false;
    },
    getChatsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setConversationList: (state, { payload }) => {
      state.conversationList = payload;
    },
    innitializeMessagesStart: (state) => {
      state.loading = true;
      state.error = null;
      state.isSubmitting = true;
    },
    innitializeMessagesSuccess: (state, action) => {
      state.loading = false;
      state.messages = [...action.payload];
      state.error = null;
      state.isSubmitting = false;
    },
    innitializeMessagesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isSubmitting = false;
    },

    createMessagesStart: (state) => {
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
    createMessagesFailure: (state, action) => {
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

    SetConversationIdSuccess: (state, action) => {
      state.loading = false;
      state.conversationId = action.payload;
      state.error = null;
      state.isSubmitting = false;
    },
    resetChat: (state) => {
      state.messages = [];
      state.message = "";
      state.conversationList = [];
      state.loading = false;
      state.unread = null;
      state.error = null;
      state.conversationId = "";
      state.isSubmitting = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getChatsStart,
  getChatsSuccess,
  getChatsFailure,
  createMessageStart,

  createMessageSuccess,
  createMessageFailure,
  innitializeMessagesStart,
  innitializeMessagesSuccess,
  innitializeMessagesFailure,

  setConversationList,
  createMessagesStart,
  createMessagesSuccess,
  createMessagesFailure,
  SetConversationIdSuccess,
  resetChat,
} = chatSlice.actions;

export default chatSlice.reducer;
