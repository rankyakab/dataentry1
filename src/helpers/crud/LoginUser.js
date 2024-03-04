// apiLogin.js

import createAxiosInstance from "../connection/createAxiosInstance";

const LoginUser = async (data, url) => {
  try {
    const response = await createAxiosInstance().post(`/${url}`, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export default LoginUser;
