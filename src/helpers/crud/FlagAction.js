import createAxiosInstance from "../connection/createAxiosInstance";

export const createFlag = async (data) => {
  try {
    const response = await createAxiosInstance().post("/flag", data);

    return response;
  } catch (error) {
    throw error;
  }
};
export const fetchFlag = async () => {
  try {
    const response = await createAxiosInstance().get("/flag");

    return response;
  } catch (error) {
    throw error;
  }
};

export const updateFlag = async (data) => {
  try {
    const response = await createAxiosInstance().put(`/flag/${data._id}`, data);

    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteFlag = async (id) => {
  try {
    const response = await createAxiosInstance().delete(`/flag/${id}`);

    return response;
  } catch (error) {
    throw error;
  }
};
