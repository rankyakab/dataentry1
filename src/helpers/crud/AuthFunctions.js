import createAxiosInstance from "../connection/createAxiosInstance";

export const forgetPasswordUpdate = async (data) => {
  try {
    const response = await createAxiosInstance().post(
      "/actorauth/forgotpassword",
      data
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const resetPasswordUpdate = async (data) => {
  try {
    const response = await createAxiosInstance().post(
      "/actorauth/reset-password",
      data
    );
    return response;
  } catch (error) {
    throw error;
  }
};
