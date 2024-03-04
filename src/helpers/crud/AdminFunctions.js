import createAxiosInstance from "../connection/createAxiosInstance";

export const createAdmin = async (data) => {
  try {
    console.log("this is what got here", data);
    const response = await createAxiosInstance().post("/admin", data);

    return response;
  } catch (error) {
    throw error;
  }
};
export const updateAdmin = async (data) => {
  try {
    const response = await createAxiosInstance().put(
      `/admin/${data._id}`,
      data
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteAdmin = async (data) => {
  try {
    const response = await createAxiosInstance().delete(`/admin/${data}`);

    return response;
  } catch (error) {
    throw error;
  }
};
export const suspendAdmin = async (data) => {
  try {
    console.log("this is the id being passwed", data);
    const response = await createAxiosInstance().get(`/admin/suspend/${data}`);

    return response;
  } catch (error) {
    throw error;
  }
};
export const upgradeAdmin = async (data) => {
  try {
    const response = await createAxiosInstance().get(`/admin/upgrade/${data}`);

    return response;
  } catch (error) {
    throw error;
  }
};
