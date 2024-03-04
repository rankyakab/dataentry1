import {
  setAdminList,
  getAdminsStart,
  getAdminsFailure,
  getAdminsSuccess,
  deleteAdminStart,
  deleteAdminSuccess,
  deleteAdminFailure,
  createAdminStart,
  createAdminSuccess,
  createAdminFailure,
} from "../reducers/admins";
import ReadAll from "../../helpers/crud/ReadAll";
import DeleteItem from "../../helpers/crud/DeleteItem";
import CreateItem from "../../helpers/crud/CreateItem";

export const fetchAdmins = () => async (dispatch) => {
  try {
    dispatch(getAdminsStart());
    const response = await ReadAll("admin");
    const data = response.data.admins;
    console.log("this is the data return", data);
    dispatch(getAdminsSuccess(data));
  } catch (error) {
    dispatch(getAdminsFailure(error.message));
  }
};

export const deleteAdmin = (adminId) => async (dispatch) => {
  try {
    dispatch(deleteAdminStart());

    // Assuming you have an API endpoint to delete a user
    const response = await DeleteItem(adminId, "admin");

    dispatch(deleteAdminSuccess(adminId));
  } catch (error) {
    dispatch(deleteAdminFailure(error.message));
  }
};

export const createAdmin = (userData) => async (dispatch) => {
  try {
    dispatch(createAdminStart());

    const createdItem = await CreateItem(userData, "admin");
    console.log("this is the created data", createdItem);

    dispatch(createAdminSuccess(createdItem.data.admin));
  } catch (error) {
    dispatch(createAdminFailure(error.message));
  }
};
