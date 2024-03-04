import createAxiosInstance from "../connection/createAxiosInstance";
//ffetch alll user
export const getAllVendors = async () => {
  try {
    const response = await createAxiosInstance().get(`/vendor`);

    return response;
  } catch (error) {
    throw error;
  }
};

export const createVendor = async (data) => {
  try {
    const response = await createAxiosInstance().post("/vendor", data);

    return response;
  } catch (error) {
    throw error;
  }
};
export const getVendor = async (data) => {
  try {
    const response = await createAxiosInstance().get(`/vendor/${data}`);

    return response;
  } catch (error) {
    throw error;
  }
};
export const getSuspendedVendor = async () => {
  try {
    const response = await createAxiosInstance().get(`/vendor/suspended`);

    return response;
  } catch (error) {
    console.log("thisiisis", error);
    throw error;
  }
};
export const getUnactivatedVendor = async () => {
  try {
    const response = await createAxiosInstance().get(`/vendor/unactivated`);

    return response;
  } catch (error) {
    console.log("thisiisis", error);
    throw error;
  }
};
export const getUnverifiedVendor = async () => {
  try {
    const response = await createAxiosInstance().get(`/vendor/unverified`);

    return response;
  } catch (error) {
    console.log("thisiisis", error);
    throw error;
  }
};
//get totall created for today
export const getDayVendor = async () => {
  try {
    const response = await createAxiosInstance().get(`/vendor/today`);
    return response;
  } catch (error) {
    throw error;
  }
};
export const getWeekVendor = async () => {
  try {
    const response = await createAxiosInstance().get(`/vendor/week`);
    // console.log("week flflflleldldkdkkkd", response);
    return response;
  } catch (error) {
    throw error;
  }
};

//get vendor for the month
export const getMonthVendor = async () => {
  try {
    const response = await createAxiosInstance().get(`/vendor/month`);
    return response;
  } catch (error) {
    throw error;
  }
};

//get vendor for the past six month
export const get6MonthVendor = async () => {
  try {
    const response = await createAxiosInstance().get(`/vendor/6month`);
    return response;
  } catch (error) {
    throw error;
  }
};
//get vendor for the past six month
export const getYearVendor = async () => {
  try {
    const response = await createAxiosInstance().get(`/vendor/year`);
    return response;
  } catch (error) {
    throw error;
  }
};
export const getTopVendor = async () => {
  try {
    const response = await createAxiosInstance().get(`/vendor/top`);

    return response;
  } catch (error) {
    throw error;
  }
};
export const getVendorCount = async () => {
  try {
    const response = await createAxiosInstance().get(`/vendor/count`);

    return response;
  } catch (error) {
    throw error;
  }
};

export const updateVendor = async (data) => {
  try {
    const response = await createAxiosInstance().put(
      `/vendor/${data._id}`,
      data
    );

    return response;
  } catch (error) {
    throw error;
  }
};
export const changeContactDetails = async (data) => {
  try {
    const response = await createAxiosInstance().post(
      `/vendor/update/contactperson`,
      data
    );

    return response;
  } catch (error) {
    throw error;
  }
};
export const deleteVendor = async (data) => {
  try {
    const response = await createAxiosInstance().delete(`/vendor/${data}`);

    return response;
  } catch (error) {
    throw error;
  }
};
export const suspendVendor = async (data, request) => {
  try {
    const response = await createAxiosInstance().get(
      `/vendor/suspend/${data}/${request}/`
    );

    return response;
  } catch (error) {
    throw error;
  }
};
export const activateVendor = async (id) => {
  try {
    const response = await createAxiosInstance().get(`/vendor/activate/${id}/`);

    return response;
  } catch (error) {
    throw error;
  }
};
export const createBusiness = async (data) => {
  try {
    console.log("this i the data to be submitted", data);

    const response = await createAxiosInstance().post(
      `/vendor/business/create`,
      data
    );

    return response;
  } catch (error) {
    throw error;
  }
};
//ffetch  user by id
export const ActivateVendorByActorId = async (id) => {
  try {
    const response = await createAxiosInstance().get(`/actor/activate/${id}`);

    return response;
  } catch (error) {
    throw error;
  }
};

//ffetch  user by id
export const changeMyVendorDetails = async (data) => {
  try {
    const response = await createAxiosInstance().post(
      `/vendor/update/vendor`,
      data
    );

    return response;
  } catch (error) {
    throw error;
  }
};
