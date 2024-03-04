import createAxiosInstance from "../connection/createAxiosInstance";

export const fetchChats = async () => {
  try {
    const response = await createAxiosInstance().get("/chat");

    return response;
  } catch (error) {
    throw error;
  }
};
export const fetchChatsForAdmin = async () => {
  try {
    const response = await createAxiosInstance().get("/chat/admin");

    return response;
  } catch (error) {
    throw error;
  }
};
export const fetchActorUnreadChat = async () => {
  try {
    const { data } = await createAxiosInstance().get(`/chat/actorunread`);

    return data.count;
  } catch (error) {
    console.error("&&&&&&&&&&&***** tghis is the errororroorr", error);
    throw error;
  }
};

export const fetchConversation = async (conversationId) => {
  try {
    const response = await createAxiosInstance().get(
      `/message/${conversationId}/actor`
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchVendorConversationsForAdmin = async (id) => {
  try {
    const response = await createAxiosInstance().get(`/chat/vendor/${id}`);

    return response;
  } catch (error) {
    throw error;
  }
};
// this fetchs a chat by chat id
export const fetchChatById = async (id) => {
  try {
    const response = await createAxiosInstance().get(`/chat/${id}`);

    return response;
  } catch (error) {
    throw error;
  }
};
export const vendorSendMessage = async (details) => {
  try {
    const response = await createAxiosInstance().post(
      `/message/vendor`,
      details
    );

    return response;
  } catch (error) {
    throw error;
  }
};
