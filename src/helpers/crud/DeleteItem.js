import createAxiosInstance from "../connection/createAxiosInstance";

const DeleteItem = async (itemId, url) => {
  try {
    const response = await createAxiosInstance().delete(`/${url}/${itemId}`);
    return response;
  } catch (error) {
    throw new Error("Error deleting item: " + error.message);
  }
};

export default DeleteItem;
