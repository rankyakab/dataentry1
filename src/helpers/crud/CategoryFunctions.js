import createAxiosInstance from "../connection/createAxiosInstance";
export const fetchCategories = async () => {
  try {
    const response = await createAxiosInstance().get("/category");

    return response;
  } catch (error) {
    throw error;
  }
};

export const createStoreCategory = async (data) => {
  try {
    const response = await createAxiosInstance().post("/category", data);

    return response;
  } catch (error) {
    throw error;
  }
};
export const updateStoreCategory = async (data) => {
  try {
    const response = await createAxiosInstance().put(
      `/category/${data._id}`,
      data
    );

    return response;
  } catch (error) {
    throw error;
  }
};
export const deleteStoreCategory = async (id) => {
  try {
    const response = await createAxiosInstance().delete(`/category/${id}`);

    return response;
  } catch (error) {
    throw error;
  }
};
