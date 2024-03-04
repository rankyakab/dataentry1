import createAxiosInstance from "../connection/createAxiosInstance";

const VerifyEmail = async (data) => {
  try {
    const response = await createAxiosInstance().post(
      "/actorauth/verify",
      data
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export default VerifyEmail;
