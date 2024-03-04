import createAxiosInstance from "../connection/createAxiosInstance";

export const createVendorCollection = async (data) => {
  try {
    const response = await createAxiosInstance().post("/collection", data);

    return response;
  } catch (error) {
    throw error;
  }
};
export const fetchAllPendingCollection = async () => {
  try {
    const response = await createAxiosInstance().get(`/collection`);

    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchAllVendorPendingCollection = async () => {
  try {
    const response = await createAxiosInstance().get(`/collection/vendor`);

    return response;
  } catch (error) {
    throw error;
  }
};
export const fetchAllVendorApprovedCollection = async () => {
  try {
    const response = await createAxiosInstance().get(`/collection/approved`);

    return response;
  } catch (error) {
    throw error;
  }
};
export const fetchAllVendorRejectedCollection = async () => {
  try {
    const response = await createAxiosInstance().get(`/collection/rejected`);

    return response;
  } catch (error) {
    throw error;
  }
};

export const updatePendingVendorCollection = async (data) => {
  try {
    const response = await createAxiosInstance().put(
      `/collection/${data._id}`,
      data
    );

    return response;
  } catch (error) {
    throw error;
  }
};
export const rejectPendingVendorCollection = async (id) => {
  try {
    const response = await createAxiosInstance().get(
      `/collection/reject/${id}`
    );
    console.log("this is the main thing oas doiidid ", response);
    return response;
  } catch (error) {
    throw error;
  }
};
export const acceptPendingVendorCollection = async (id) => {
  try {
    const response = await createAxiosInstance().get(
      `/collection/approve/${id}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const deletePendingVendorCollection = async (id) => {
  try {
    const response = await createAxiosInstance().delete(`/collection/${id}`);

    return response;
  } catch (error) {
    throw error;
  }
};
