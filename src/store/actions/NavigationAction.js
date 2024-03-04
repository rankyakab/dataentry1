import { setCurentLocation } from "../reducers/navigation";
import ReadAll from "../../helpers/crud/ReadAll";
import DeleteItem from "../../helpers/crud/DeleteItem";
import CreateItem from "../../helpers/crud/CreateItem";
import UpdateItem from "../../helpers/crud/UpdateItem";

export const updateLocation = (location) => async (dispatch) => {
  try {
    dispatch(setCurentLocation(location));
  } catch (error) {
    dispatch(setCurentLocation("/"));
  }
};
