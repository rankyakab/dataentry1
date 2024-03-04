import {
  getDesignationStart,
  getDesignationFailure,
  getDesignationSuccess,
  createDesignationStart,
  createDesignationSuccess,
  createDesignationFailure,
  deleteDesignationStart,
  deleteDesignationSuccess,
  deleteDesignationFailure,
  updateDesignationStart,
  updateDesignationSuccess,
  updateDesignationFailure,
} from "../reducers/designation";
import ReadAll from "../../helpers/crud/ReadAll";
import CreateItem from "../../helpers/crud/CreateItem";
import DeleteItem from "../../helpers/crud/DeleteItem";
import UpdateItem from "../../helpers/crud/UpdateItem";

export const fetchDesignations = () => async (dispatch) => {
  try {
    dispatch(getDesignationStart());
    const response = await ReadAll("designation");
    const data = response.data.designations;
    dispatch(getDesignationSuccess(data));
  } catch (error) {
    dispatch(getDesignationFailure(error.message));
  }
};

export const createDesignation = (designationData) => async (dispatch) => {
  try {
    dispatch(createDesignationStart());

    const createdItem = await CreateItem(designationData, "designation");
    console.log("this is the created data", createdItem);

    dispatch(createDesignationSuccess(createdItem.data.designation));
  } catch (error) {
    dispatch(createDesignationFailure(error.message));
  }
};

export const deleteDesignation = (designationId) => async (dispatch) => {
  try {
    dispatch(deleteDesignationStart());

    // Assuming you have an API endpoint to delete a user
    const response = await DeleteItem(designationId, "designation");

    if (response.statusText != "OK") {
      throw new Error("Failed to delete designation");
    }

    dispatch(deleteDesignationSuccess(designationId));
  } catch (error) {
    dispatch(deleteDesignationFailure(error.message));
  }
};

export const updateDesignation = (designation) => async (dispatch) => {
  try {
    dispatch(updateDesignationStart());

    // Assuming you have an API endpoint to delete a user

    const response = await UpdateItem(
      designation._id,
      designation,
      "designation"
    );

    if (response.statusText != "OK") {
      throw new Error("Failed to delete designation");
    }

    dispatch(updateDesignationSuccess(designation));
  } catch (error) {
    dispatch(updateDesignationFailure(error.message));
  }
};
