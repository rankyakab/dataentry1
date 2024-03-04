import axios from "axios";
import {
  changeContactDetails,
  changeMyVendorDetails,
} from "../../helpers/crud/VendorFunctions";
import {
  authenticate,
  startUpdateContact,
  updatContactSuccess,
  updatContactFailure,
  startUpdateVendor,
  updateVendorSuccess,
  updateVendorFailure,
} from "../reducers/auth";

export const updateAuthContactPerson = (contactPerson) => async (dispatch) => {
  dispatch(startUpdateContact());
  try {
    //dispatch(change);
    const { data } = await changeContactDetails({ contactPerson });

    console.log("this is the data return", data.user);
    dispatch(updatContactSuccess(data.user));
  } catch (error) {
    dispatch(updatContactFailure("Something went Wrong, please try again"));
    console.error(error);
    // dispatch(getVendorsFailure(error.message));
  }
};

export const updateVendorInfo = (vendorDetails) => async (dispatch) => {
  let logo = "";
  dispatch(startUpdateVendor());
  try {
    //dispatch(change);
    if (vendorDetails.file) {
      //  const uploadResponse =

      const formDataUpload = new FormData();
      formDataUpload.append("file", vendorDetails.file);

      const response = await axios.post(
        "https://kopashun.com/api/vendor/aws",
        //     "http://localhost:5000/api/vendor/aws",
        formDataUpload
      );

      if (response.status === 200) {
        console.log("Image URL:", response.data);
        logo = response?.data?.location;
      }
    }
    const { data } = await changeMyVendorDetails({ ...vendorDetails, logo });

    console.log("this is the data return", data.user);
    dispatch(updateVendorSuccess(data.user));
  } catch (error) {
    dispatch(updateVendorFailure("Something went Wrong, please try again"));
    console.error(error);
    // dispatch(getVendorsFailure(error.message));
  }
};
