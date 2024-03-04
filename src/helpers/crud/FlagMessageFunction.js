import createAxiosInstance from "../connection/createAxiosInstance";

export const fetchAllUnresolvedVendorFlags = async () => {
  try {
    const response = await createAxiosInstance().get(
      "/flagedmessage/unresolved"
    );

    return response;
  } catch (error) {
    throw error;
  }
};
export const suspendVendorByFlag = async (data) => {
  try {
    const response = await createAxiosInstance().post(
      `/flagedmessage/suspend`,
      data
    );

    return response;
  } catch (error) {
    throw error;
  }
};
export const dismissFlagedMessage = async (id) => {
  try {
    const response = await createAxiosInstance().get(
      `/flagedmessage/dismiss/${id}`
    );

    return response;
  } catch (error) {
    throw error;
  }
};
