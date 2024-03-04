import createAxiosInstance from "../connection/createAxiosInstance";

export const getUserCount = async () => {
  try {
    const response = await createAxiosInstance().get(`/user/count`);

    return response;
  } catch (error) {
    throw error;
  }
};
//ffetch alll user
export const getAllUsers = async () => {
  try {
    const response = await createAxiosInstance().get(`/user`);

    return response;
  } catch (error) {
    throw error;
  }
};
//ffetch alll Active user
export const getAllActiveUsers = async () => {
  try {
    const response = await createAxiosInstance().get(`/user`);

    return response;
  } catch (error) {
    throw error;
  }
};
//ffetch alll Suspended user
export const getAllSuspendedUsers = async () => {
  try {
    const response = await createAxiosInstance().get(`/user/suspended`);

    return response;
  } catch (error) {
    throw error;
  }
};
//they have been verified but awaiting activation
export const getAllUsersAwatingActivation = async () => {
  try {
    const response = await createAxiosInstance().get(`/user/awaitactivation`);

    return response;
  } catch (error) {
    throw error;
  }
};

//ffetch alll new user
export const getAllUnverifiedUsers = async () => {
  try {
    const response = await createAxiosInstance().get(`/user/unverified`);

    return response;
  } catch (error) {
    throw error;
  }
};

//ffetch  user by id
export const activateUserById = async (id) => {
  try {
    const response = await createAxiosInstance().get(`/user/activate/${id}`);

    return response;
  } catch (error) {
    throw error;
  }
};
//ffetch  user by id
export const suspendUserToogleById = async (id) => {
  try {
    const response = await createAxiosInstance().get(`/user/suspend/${id}`);

    return response;
  } catch (error) {
    throw error;
  }
};
//ffetch  user by id
export const getUserById = async (id) => {
  try {
    const response = await createAxiosInstance().get(`/user/${id}`);

    return response;
  } catch (error) {
    throw error;
  }
};
//get totall created for today
export const getDayUser = async () => {
  try {
    const response = await createAxiosInstance().get(`/user/today`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getWeekUser = async () => {
  try {
    const response = await createAxiosInstance().get(`/user/week`);
    return response;
  } catch (error) {
    throw error;
  }
};
//get totall created for today
export const getMonthUser = async () => {
  try {
    const response = await createAxiosInstance().get(`/user/month`);
    return response;
  } catch (error) {
    throw error;
  }
};
//get totall created for six months
export const get6MonthUser = async () => {
  try {
    const response = await createAxiosInstance().get(`/user/6month`);
    return response;
  } catch (error) {
    throw error;
  }
};
//get totall created for six months
export const getYearUser = async () => {
  try {
    const response = await createAxiosInstance().get(`/user/year`);
    return response;
  } catch (error) {
    throw error;
  }
};
