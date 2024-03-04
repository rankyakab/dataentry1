import createAxiosInstance from "../connection/createAxiosInstance";

const CreateItem = async (data, url) => {
  try {
    const response = await createAxiosInstance().post(`/${url}`, data);
    return response;
  } catch (error) {
    throw new Error("Error creating item: " + error.message);
  }
};

export default CreateItem;
