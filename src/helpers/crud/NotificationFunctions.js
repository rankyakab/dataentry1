import createAxiosInstance from "../connection/createAxiosInstance";

export const createNotification = async (data) => {
  try {
    const response = await createAxiosInstance().post("/notification", data);

    return response;
  } catch (error) {
    throw error;
  }
};

export const getInfiniteNotification = async (data) => {
  try {
    const response = await createAxiosInstance().get(
      `/notification/infinite/${data}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getVendorPageNotifications = async () => {
  try {
    const response = await createAxiosInstance().get(
      `/notification/vendorpagenotification`
    );

    return response;
  } catch (error) {
    throw error;
  }
};
export const getUserPageNotifications = async () => {
  try {
    const response = await createAxiosInstance().get(
      `/notification/userpagenotification`
    );

    return response;
  } catch (error) {
    throw error;
  }
};
export const getCollectionPageNotifications = async () => {
  try {
    const response = await createAxiosInstance().get(
      `/notification/collectionpagenotification`
    );

    return response;
  } catch (error) {
    throw error;
  }
};
export const getUnreadNotificationCount = async () => {
  try {
    const response = await createAxiosInstance().get(
      `/notification/count/unread`
    );

    return response.data.count;
  } catch (error) {
    throw error;
  }
};
