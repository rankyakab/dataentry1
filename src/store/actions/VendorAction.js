import {
  getVendorsStart,
  getVendorsFailure,
  getVendorsSuccess,
  deleteVendorStart,
  deleteVendorSuccess,
  deleteVendorFailure,
  createVendorStart,
  createVendorSuccess,
  createVendorFailure,
  suspendVendorStart,
  suspendVendorSuccess,
  suspendVendorFailure,
  setAVendor,
} from "../reducers/vendor";
import ReadAll from "../../helpers/crud/ReadAll";
import DeleteItem from "../../helpers/crud/DeleteItem";
import CreateItem from "../../helpers/crud/CreateItem";
import UpdateItem from "../../helpers/crud/UpdateItem";
import { getVendor } from "../../helpers/crud/VendorFunctions";

export const fetchVendors = () => async (dispatch) => {
  try {
    dispatch(getVendorsStart());
    const response = await ReadAll("vendor");
    const data = response.data.vendors;
    console.log("this is the data return", data);
    dispatch(getVendorsSuccess(data));
  } catch (error) {
    dispatch(getVendorsFailure(error.message));
  }
};
export const setCurrentVendor = (vendorId) => async (dispatch) => {
  try {
    const response = await getVendor(vendorId);
    console.log("this is the vendor abd ba wagaa", response);
    dispatch(setAVendor(response.data.vendor));
  } catch (error) {
    dispatch(createVendorFailure(error.message));
  }
};
export const deleteVendor = (vendorId) => async (dispatch) => {
  try {
    dispatch(deleteVendorStart());

    // Assuming you have an API endpoint to delete a user
    const response = await DeleteItem(vendorId, "vendor");
    console.log("this is the fucking response", response);

    if (response.statusText != "OK") {
      throw new Error("Failed to delete user");
    }

    dispatch(deleteVendorSuccess(vendorId));
  } catch (error) {
    dispatch(deleteVendorFailure(error.message));
  }
};

export const createVendor = (userData) => async (dispatch) => {
  try {
    dispatch(createVendorStart());

    const createdItem = await CreateItem(userData, "vendor");
    console.log("this is the created data", createdItem);

    dispatch(createVendorSuccess(createdItem.data.vendor));
  } catch (error) {
    dispatch(createVendorFailure(error.message));
  }
};

export const suspendVendor = (vendorId, action) => async (dispatch) => {
  console.log("suspension started", vendorId, action);
  try {
    console.log("suspension started", vendorId, action);

    dispatch(suspendVendorStart());

    // Assuming you have an API endpoint to delete a user
    console.log(" firs t  suspension started");

    const response = await UpdateItem(vendorId, action, "actor");
    console.log("suspension updated", response);

    if (response.statusText != "OK") {
      throw new Error("Failed to suspend vendor");
    }

    const res = await ReadAll("vendor");
    console.log("suspension hasppened", res);
    const data = res.data.vendors;

    //dispatch(suspendVendorSuccess(data));
  } catch (error) {
    dispatch(suspendVendorFailure(error.message));
  }
};
