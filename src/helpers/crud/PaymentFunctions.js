import createAxiosInstance from "../connection/createAxiosInstance";

export const innitialize = async (data) => {
  try {
    const response = await createAxiosInstance().post("/payment", data);

    return response;
  } catch (error) {
    throw error;
  }
};

export const getBanks = async () => {
  try {
    const response = await createAxiosInstance().get("/payment/banks");

    return response;
  } catch (error) {
    throw error;
  }
};

export const resolveAccount = async (data) => {
  try {
    const response = await createAxiosInstance().post("/payment/resolve", data);
    console.log(response);

    return response;
  } catch (error) {
    console.log("tjos is the payment error", error);
    throw error;
  }
};

export const createRecipient = async () => {
  try {
    const response = await createAxiosInstance().get(
      "/payment/create-recipient"
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const transferFunds = async (data) => {
  try {
    const response = await createAxiosInstance().post(
      "/payment/transfer",
      data
    );

    return response;
  } catch (error) {
    throw error;
  }
};
