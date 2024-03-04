import createAxiosInstance from "../connection/createAxiosInstance";

export const createProduct = async (data) => {
  console.log(data, "this is the  data");
  try {
    const response = await createAxiosInstance().post("/product", data);

    return response;
  } catch (error) {
    throw error;
  }
};
export const updateProduct = async (data) => {
  try {
    const response = await createAxiosInstance().put(
      `/product/${data._id}`,
      data
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const myProducts = async () => {
  try {
    const response = await createAxiosInstance().get("/product/myproducts");

    return response;
  } catch (error) {
    throw error;
  }
};
//get top products
export const getTopProducts = async () => {
  try {
    const response = await createAxiosInstance().get(`/product/top`);

    return response;
  } catch (error) {
    throw error;
  }
};
export const deleteProduct = async (itemId) => {
  try {
    const response = await createAxiosInstance().delete(`/product/${itemId}`);
    return response;
  } catch (error) {
    throw error;
  }
};
export const archiveProduct = async (itemId) => {
  try {
    const response = await createAxiosInstance().get(
      `/product/archive/${itemId}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
