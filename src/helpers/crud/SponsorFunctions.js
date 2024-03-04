import createAxiosInstance from "../connection/createAxiosInstance";
export const sponsorVendor = async (details) => {
  try {
    const response = await createAxiosInstance().post(
      `/sponsoredvendor`,
      details
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const sponsorProduct = async (details) => {
  try {
    const response = await createAxiosInstance().post(
      `/sponsoredproduct`,
      details
    );

    return response;
  } catch (error) {
    throw error;
  }
};
export const mySponsored = async () => {
  try {
    const response = await createAxiosInstance().get(
      `/sponsoredvendor/mysponsored`
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const sponsored = async () => {
  try {
    const response = await createAxiosInstance().get(
      `/sponsoredvendor/sponsored`
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const vendorSponsoredStatus = async () => {
  try {
    const response = await createAxiosInstance().get(
      `/sponsoredvendor/sponsored/vendor/status`
    );

    return response;
  } catch (error) {
    throw error;
  }
};
