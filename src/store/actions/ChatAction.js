import {
  createMessageSuccess,
  createMessagesSuccess,
  createMessageFailure,
  innitializeMessagesFailure,
  innitializeMessagesStart,
  innitializeMessagesSuccess,
  getChatsStart,
  getChatsSuccess,
  getChatsFailure,
  SetConversationIdSuccess,
  resetChat,
} from "../reducers/chat";

import {
  fetchChats,
  fetchConversation,
  vendorSendMessage,
} from "../../helpers/crud/ChatFunctions";

export const setMessage = (message) => async (dispatch) => {
  try {
    dispatch(createMessageSuccess(message));
  } catch (error) {
    dispatch(createMessageFailure(""));
  }
};
export const sendNewMessages = (message) => async (dispatch) => {
  try {
    if (message.message != "") {
      dispatch(setNewMessages({ ...message, content: message.message }));
      const result = await vendorSendMessage(message);
    } else {
    }
    dispatch(setNewMessage(""));
  } catch (error) {
    //dispatch(innitializeMessagesFailure(error.message));
  }
};
export const getChats = () => async (dispatch) => {
  try {
    dispatch(getChatsStart());

    const { data } = await fetchChats();

    dispatch(getChatsSuccess(data.chats));
  } catch (error) {
    dispatch(getChatsFailure(error.message));
  }
};

export const setMessages = (conversationId) => async (dispatch) => {
  try {
    dispatch(innitializeMessagesStart());

    // fetch chat based of conversation id
    const { data } = await fetchConversation(conversationId);

    dispatch(innitializeMessagesSuccess(data));
  } catch (error) {
    dispatch(innitializeMessagesFailure(error.message));
  }
};

export const setConversationId = (conversationId) => async (dispatch) => {
  try {
    // dispatch(innitializeMessagesStart());
    const { data } = await fetchConversation(conversationId);
    dispatch(innitializeMessagesSuccess(data));
    dispatch(SetConversationIdSuccess(conversationId));
  } catch (error) {
    //dispatch(innitializeMessagesFailure(error.message));
  }
};
export const setNewMessage = (message) => async (dispatch) => {
  try {
    // dispatch(innitializeMessagesStart());
    dispatch(createMessageSuccess(message));
  } catch (error) {
    //dispatch(innitializeMessagesFailure(error.message));
  }
};
export const setNewMessages = (message) => async (dispatch) => {
  try {
    // dispatch(innitializeMessagesStart());
    dispatch(createMessagesSuccess(message));
  } catch (error) {
    //dispatch(innitializeMessagesFailure(error.message));
  }
};

export const resetChatValues = () => async (dispatch) => {
  dispatch(resetChat());
};
