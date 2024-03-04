import createAxiosInstance from "../connection/createAxiosInstance.js";

const ReadAll = async (url) => {
  try {
    const response = await createAxiosInstance().get(`/${url}/`);
    return response;
  } catch (error) {
    throw new Error("Error getting all : " + error.message);
  }
};

export default ReadAll;
