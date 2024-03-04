import createAxiosInstance from "../connection/createAxiosInstance";

export const createServiceBatch = async (data) => {
  try {
    const response = await createAxiosInstance().post("/servicebatch", data);

    return response;
  } catch (error) {
    throw error;
  }
};
export const fetchServiceBatch = async () => {
  try {
    const response = await createAxiosInstance().get("/servicebatch");

    return response;
  } catch (error) {
    throw error;
  }
};

export const updateServiceBatch = async (data) => {
  try {
    const response = await createAxiosInstance().put(
      `/servicebatch/${data._id}`,
      data
    );

    return response;
  } catch (error) {
    throw error;
  }
};
