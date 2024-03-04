import createAxiosInstance from "../connection/createAxiosInstance";

export const createReport = async (data) => {
  try {
    const response = await createAxiosInstance().post("/vendorreport", data);

    return response;
  } catch (error) {
    throw error;
  }
};
export const fetchReports = async () => {
  try {
    const response = await createAxiosInstance().get("/vendorreport");

    return response;
  } catch (error) {
    throw error;
  }
};
export const fetchUserReports = async () => {
  try {
    const response = await createAxiosInstance().get("/vendorreport/user");

    return response;
  } catch (error) {
    throw error;
  }
};
