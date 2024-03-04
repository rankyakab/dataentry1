import createAxiosInstance from "../connection/createAxiosInstance";

const ReadItem = async (itemId, url) => {
  // no need to remember to start url with forward slash and end it with forward slash
  try {
    const response = await createAxiosInstance().get(`/${url}/${itemId}`);
    return response.data;
  } catch (error) {
    throw new Error("Error reading item: " + error.message);
  }
};

export default ReadItem;
