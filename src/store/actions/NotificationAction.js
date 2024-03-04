import {
  setUnreadMessage,
  setVendorNotification,
  setUserNotification,
  setCollectionNotification,
} from "../reducers/notification";
import { fetchActorUnreadChat } from "../../helpers/crud/ChatFunctions";
import {
  getCollectionPageNotifications,
  getUserPageNotifications,
  getVendorPageNotifications,
} from "../../helpers/crud/NotificationFunctions";

export const updateUnreadMessagesCount = () => async (dispatch) => {
  try {
    const count = await fetchActorUnreadChat();
    dispatch(setUnreadMessage(count));
  } catch (error) {
    dispatch(setUnreadMessage(0));
  }
};

export const setPageNotification = () => async (dispatch) => {
  try {
    const response = await getVendorPageNotifications();

    const userResponse = await getUserPageNotifications();
    const collectionResponse = await getCollectionPageNotifications();
    const data = response?.data?.vendorPageNotification;
    console.log(
      "this is the data return for vendor notificationnn************",
      data
    );

    console.log(
      "this is the data return for vendor notificationnn*************",
      userResponse?.data?.userPageNotification
    );
    dispatch(setVendorNotification(data));
    dispatch(setUserNotification(userResponse?.data?.userPageNotification));

    dispatch(
      setCollectionNotification(
        collectionResponse?.data?.userCollectionNotification
      )
    );
  } catch (error) {
    // dispatch(getAdminsFailure(error.message));
  }
};
