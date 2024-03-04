import createAxiosInstance from "../connection/createAxiosInstance";
export const MyStoreReviews = async () => {
  try {
    const response = await createAxiosInstance().get(`/vendorreview`);

    return response;
  } catch (error) {
    throw error;
  }
};

export const getProductReviewsByProductId = async (data) => {
  try {
    const response = await createAxiosInstance().post(`/productreview`, data);

    return response;
  } catch (error) {
    throw error;
  }
};
