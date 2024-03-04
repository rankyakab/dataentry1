import createAxiosInstance from "../connection/createAxiosInstance";
export const myTransactions = async () => {
  try {
    const response = await createAxiosInstance().get(
      "/transaction/mytransactions"
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const allTransactions = async () => {
  try {
    const response = await createAxiosInstance().get(
      "/transaction/alltransactions"
    );

    return response;
  } catch (error) {
    throw error;
  }
};
