import createAxiosInstance from "../connection/createAxiosInstance";

const UpdateItem = async (itemId, data, url) => {
  try {
    const response = await createAxiosInstance().put(`/${url}/${itemId}`, data);
    return response;
  } catch (error) {
    throw new Error("Error updating item: " + error.message);
  }
};

export default UpdateItem;
