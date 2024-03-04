import {
  getCategoryStart,
  getCategoryFailure,
  getCategorySuccess,
  createCategoryStart,
  createCategorySuccess,
  createCategoryFailure,
  deleteCategoryStart,
  deleteCategorySuccess,
  deleteCategoryFailure,
  updateCategoryStart,
  updateCategorySuccess,
  updateCategoryFailure,
} from "../reducers/category";
import ReadAll from "../../helpers/crud/ReadAll";
import CreateItem from "../../helpers/crud/CreateItem";
import DeleteItem from "../../helpers/crud/DeleteItem";
import UpdateItem from "../../helpers/crud/UpdateItem";

export const fetchCategorys = () => async (dispatch) => {
  try {
    dispatch(getCategoryStart());
    const response = await ReadAll("category");
    console.log(response.data.categories, "categorie responsedds");
    const data = response.data.categories;
    dispatch(getCategorySuccess(data));
  } catch (error) {
    dispatch(getCategoryFailure(error.message));
  }
};

export const createCategory = (categoryData) => async (dispatch) => {
  try {
    dispatch(createCategoryStart());

    const createdItem = await CreateItem(categoryData, "category");
    console.log("this is the created data", createdItem);

    dispatch(createCategorySuccess(createdItem.data.category));
  } catch (error) {
    dispatch(createCategoryFailure(error.message));
  }
};

export const deleteCategory = (categoryId) => async (dispatch) => {
  try {
    dispatch(deleteCategoryStart());

    // Assuming you have an API endpoint to delete a user
    const response = await DeleteItem(categoryId, "category");

    if (response.statusText != "OK") {
      throw new Error("Failed to delete category");
    }

    dispatch(deleteCategorySuccess(categoryId));
  } catch (error) {
    dispatch(deleteCategoryFailure(error.message));
  }
};

export const updateCategory = (category) => async (dispatch) => {
  try {
    dispatch(updateCategoryStart());

    // Assuming you have an API endpoint to delete a user

    const response = await UpdateItem(category._id, category, "category");

    if (response.statusText != "OK") {
      throw new Error("Failed to delete category");
    }

    dispatch(updateCategorySuccess(category));
  } catch (error) {
    dispatch(updateCategoryFailure(error.message));
  }
};
