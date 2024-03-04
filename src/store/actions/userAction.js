import {
  getUsersStart,
  getUsersFailure,
  getUsersSuccess,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  createUserStart,
  createUserSuccess,
  createUserFailure,
  suspendUserStart,
  suspendUserSuccess,
  suspendUserFailure,
} from "../reducers/user";
import ReadAll from "../../helpers/crud/ReadAll";
import DeleteItem from "../../helpers/crud/DeleteItem";
import CreateItem from "../../helpers/crud/CreateItem";
import UpdateItem from "../../helpers/crud/UpdateItem";

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(getUsersStart());
    const response = await ReadAll("user");
    const data = response.data.users;
    console.log("this is the data return", data);
    dispatch(getUsersSuccess(data));
  } catch (error) {
    dispatch(getUsersFailure(error.message));
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    dispatch(deleteUserStart());

    // Assuming you have an API endpoint to delete a user
    const response = await DeleteItem(userId, "user");
    console.log("this is the fucking response", response);

    if (response.statusText != "OK") {
      throw new Error("Failed to delete user");
    }

    dispatch(deleteUserSuccess(userId));
  } catch (error) {
    dispatch(deleteUserFailure(error.message));
  }
};

export const createUser = (userData) => async (dispatch) => {
  try {
    dispatch(createUserStart());

    const createdItem = await CreateItem(userData, "user");
    console.log("this is the created data", createdItem);

    dispatch(createUserSuccess(createdItem.data.user));
  } catch (error) {
    dispatch(createUserFailure(error.message));
  }
};

export const suspendUser = (userId, action) => async (dispatch) => {
  console.log("suspension started", userId, action);
  try {
    console.log("suspension started", userId, action);

    dispatch(suspendUserStart());

    // Assuming you have an API endpoint to delete a user
    console.log(" firs t  suspension started");

    const response = await UpdateItem(userId, action, "actor");
    console.log("suspension updated", response);

    if (response.statusText != "OK") {
      throw new Error("Failed to suspend user");
    }

    const res = await ReadAll("user");
    console.log("suspension hasppened", res);
    const data = res.data.users;

    //dispatch(suspendUserSuccess(data));
  } catch (error) {
    dispatch(suspendUserFailure(error.message));
  }
};
