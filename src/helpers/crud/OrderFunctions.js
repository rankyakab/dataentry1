import createAxiosInstance from "../connection/createAxiosInstance";
export const vendorOrders = async () => {
  try {
    const response = await createAxiosInstance().get("/order/vendoroders");

    return response;
  } catch (error) {
    throw error;
  }
};
