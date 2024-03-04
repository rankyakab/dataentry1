import createAxiosInstance from "../connection/createAxiosInstance";

const UpdateUserPassword = async (data) => {
  try {
    const response = await createAxiosInstance().post(
      "/actorauth/change-password",
      data
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export default UpdateUserPassword;
