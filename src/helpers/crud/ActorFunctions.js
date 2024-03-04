import createAxiosInstance from "../connection/createAxiosInstance";

export const getActor = async (data) => {
  try {
    const response = await createAxiosInstance().get(`/actor/${data}`);

    return response;
  } catch (error) {
    throw error;
  }
};
