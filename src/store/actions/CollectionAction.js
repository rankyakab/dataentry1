import {
  getCollectionStart,
  getCollectionFailure,
  getCollectionSuccess,
  createCollectionStart,
  createCollectionSuccess,
  createCollectionFailure,
  deleteCollectionStart,
  deleteCollectionSuccess,
  deleteCollectionFailure,
  updateCollectionStart,
  updateCollectionSuccess,
  updateCollectionFailure,
} from "../reducers/collection";
import ReadAll from "../../helpers/crud/ReadAll";
import CreateItem from "../../helpers/crud/CreateItem";
import DeleteItem from "../../helpers/crud/DeleteItem";
import UpdateItem from "../../helpers/crud/UpdateItem";
import { setCurrentVendor } from "./VendorAction";

export const fetchCollections = () => async (dispatch) => {
  try {
    dispatch(getCollectionStart());
    const response = await ReadAll("collection");
    const data = response.data.categories;
    dispatch(getCollectionSuccess(data));
  } catch (error) {
    dispatch(getCollectionFailure(error.message));
  }
};

export const createCollection = (collectionData) => async (dispatch) => {
  try {
    dispatch(createCollectionStart());

    const createdItem = await CreateItem(collectionData, "collection");
    dispatch(setCurrentVendor(collectionData.vendorId));
    dispatch(createCollectionSuccess(createdItem.data.collection));
  } catch (error) {
    dispatch(createCollectionFailure(error.message));
  }
};

export const deleteCollection = (collectionId) => async (dispatch) => {
  try {
    dispatch(deleteCollectionStart());

    // Assuming you have an API endpoint to delete a user
    const response = await DeleteItem(collectionId, "collection");

    if (response.statusText != "OK") {
      throw new Error("Failed to delete collection");
    }

    dispatch(deleteCollectionSuccess(collectionId));
  } catch (error) {
    dispatch(deleteCollectionFailure(error.message));
  }
};

export const updateCollection = (collection) => async (dispatch) => {
  try {
    dispatch(updateCollectionStart());

    // Assuming you have an API endpoint to delete a user

    const response = await UpdateItem(collection._id, collection, "collection");

    if (response.statusText != "OK") {
      throw new Error("Failed to delete collection");
    }

    dispatch(updateCollectionSuccess(collection));
  } catch (error) {
    dispatch(updateCollectionFailure(error.message));
  }
};
