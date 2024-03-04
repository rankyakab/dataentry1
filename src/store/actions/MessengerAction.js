import {
  //create messgee
  createMessageStart,
  createMessageSuccess,
  createMessageFailure,

  //creating new meesages
  createMessagesSuccess,

  //innitializing messages
  innitializeMessagesStart,
  innitializeMessengerFailure,

  //innitializing the whole messenger for a particular admin
  innitializeMessengerSuccess,

  //geting all mesagnger
  getMessengerStart,
  getMessengerSuccess,

  //reset nesse
  resetMessenger,
} from "../reducers/messenger";

import {
  fetchChats,
  vendorSendMessage,
} from "../../helpers/crud/ChatFunctions";
import {
  adminSendMessage,
  fetchAdminConversation,
  fetchMessengers,
} from "../../helpers/crud/MessengerFunctions";

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
      const result = await adminSendMessage(message);
    } else {
    }
    dispatch(setNewMessage(""));
  } catch (error) {
    //dispatch(innitializeMessagesFailure(error.message));
  }
};
export const getMessengers = () => async (dispatch) => {
  try {
    dispatch(getMessengerStart());

    const { data } = await fetchMessengers();

    dispatch(getMessengerSuccess(data.messengers));
  } catch (error) {
    dispatch(getMessengerFailure(error.message));
  }
};

export const setMessages = (messengerId) => async (dispatch) => {
  try {
    dispatch(innitializeMessagesStart());

    // fetch chat based of conversation id
    const { data } = await fetchAdminConversation(messengerId);

    dispatch(innitializeMessengerSuccess({ data, messengerId }));
  } catch (error) {
    dispatch(innitializeMessengerFailure(error.message));
  }
};

export const setConversationId = (conversationId) => async (dispatch) => {
  try {
    // dispatch(innitializeMessagesStart());
    const { data } = await fetchAdminConversation(conversationId);
    console.log("thihs is hte ddddddd*&^%$#$%^&*(*&^", data);
    dispatch(
      innitializeMessengerSuccess({ data, messengerId: conversationId })
    );
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

export const resetMessengerValues = () => async (dispatch) => {
  dispatch(resetMessenger());
};
