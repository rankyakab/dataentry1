import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth";
import adminReducer from "./reducers/admins";
import designationReducer from "./reducers/designation";
import vendorReducer from "./reducers/vendor";
import userReducer from "./reducers/user";

import chatReducer from "./reducers/chat";
import navigationReducer from "./reducers/navigation";
import notificationReducer from "./reducers/notification";
import categoryReducer from "./reducers/category";
import collectionReducer from "./reducers/collection";
import sponsorReducer from "./reducers/sponsor";

import messengerSlice from "./reducers/messenger";
export default configureStore({
  middleware: [thunk],
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    designation: designationReducer,
    category: categoryReducer,
    collection: collectionReducer,
    vendor: vendorReducer,
    user: userReducer,
    navigation: navigationReducer,
    chat: chatReducer,
    notification: notificationReducer,
    sponsor: sponsorReducer,
    messenger: messengerSlice,
  },
});
