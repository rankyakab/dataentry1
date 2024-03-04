import createAxiosInstance from "../connection/createAxiosInstance";

export const fetchMessengers = async () => {
  try {
    const response = await createAxiosInstance().get("/messenger");

    return response;
  } catch (error) {
    throw error;
  }
};
export const fetchMessengerWithAdmin = async (seconderId) => {
  try {
    const response = await createAxiosInstance().post("/messenger/status", {
      seconderId,
    });

    return response;
  } catch (error) {
    throw error;
  }
};
export const fetchMyUnreadChatCount = async () => {
  try {
    const { data } = await createAxiosInstance().get(`/messenger/unread`);

    return data.count;
  } catch (error) {
    console.error("&&&&&&&&&&&***** tghis is the errororroorr", error);
    throw error;
  }
};

export const fetchAdminConversation = async (messengerId) => {
  try {
    const response = await createAxiosInstance().get(
      `/message/admin/${messengerId}`
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const adminSendMessage = async (details) => {
  try {
    const response = await createAxiosInstance().post(
      `/message/admin`,
      details
    );

    return response;
  } catch (error) {
    throw error;
  }
};
