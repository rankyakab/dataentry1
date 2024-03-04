import {
  createSponsorStart,
  createSponsorSuccess,
  createSponsorFailure,
  resetSponsor,
  setSponsorDetails,
} from "../reducers/sponsor";
import ReadAll from "../../helpers/crud/ReadAll";
import DeleteItem from "../../helpers/crud/DeleteItem";
import CreateItem from "../../helpers/crud/CreateItem";
import UpdateItem from "../../helpers/crud/UpdateItem";
import {
  sponsorProduct,
  sponsorVendor,
} from "../../helpers/crud/SponsorFunctions";

export const innitializeVendorSponsor = (details) => async (dispatch) => {
  try {
    console.log(
      "************ffffff*********",
      details,
      "*************************************************"
    );
    dispatch(setSponsorDetails(details));
  } catch (error) {
    // dispatch(deleteUserFailure(error.message));
    console.log(
      "an error just occured",
      "*************************************************"
    );
  }
};

export const CreateVendorSponsor = (details) => async (dispatch) => {
  try {
    dispatch(createSponsorStart());
    const response = await sponsorVendor(details);
    console.log(response, "***************checkinge error");
    if (response?.data?.status == "success") {
      dispatch(createSponsorSuccess());
    } else {
      console.log("&***********neis**************kkgk", response);
      dispatch(
        createSponsorFailure(response?.data?.message || "somenting went wrong")
      );
    }
  } catch (error) {
    console.log(
      "************errororororororororo******",
      error?.response?.data?.message
    );
    const failureMessage =
      error?.response?.data?.message || "Something went wrong";

    dispatch(createSponsorFailure(failureMessage));
  }
};

export const ResetVendorSponsor = () => async (dispatch) => {
  try {
    dispatch(resetSponsor());
  } catch (error) {
    //  dispatch(getAdminsFailure(error.message));
  }
};

/******************
 * *****
 * *****
 * ****
 * Product sponsor
 */

export const innitializeProductSponsor = (details) => async (dispatch) => {
  try {
    console.log(
      "************ffffff*********",
      details,
      "*************************************************"
    );
    dispatch(setSponsorDetails(details));
  } catch (error) {
    // dispatch(deleteUserFailure(error.message));
    console.log(
      "an error just occured",
      "*************************************************"
    );
  }
};

export const CreateProductSponsor = (details) => async (dispatch) => {
  try {
    dispatch(createSponsorStart());
    const response = await sponsorProduct(details);
    console.log(response, "***************checkinge error");
    if (response?.data?.status == "success") {
      dispatch(createSponsorSuccess());
    } else {
      console.log("&***********neis**************kkgk", response);
      dispatch(
        createSponsorFailure(response?.data?.message || "somenting went wrong")
      );
    }
  } catch (error) {
    console.log(
      "************errororororororororo******",
      error?.response?.data?.message
    );
    const failureMessage =
      error?.response?.data?.message || "Something went wrong";

    dispatch(createSponsorFailure(failureMessage));
  }
};

export const ResetPtoductSponsor = () => async (dispatch) => {
  try {
    dispatch(resetSponsor());
  } catch (error) {
    //  dispatch(getAdminsFailure(error.message));
  }
};
