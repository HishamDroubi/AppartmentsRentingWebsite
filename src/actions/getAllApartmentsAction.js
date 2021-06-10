import axios from "axios";
import { getAllAppartments } from "../api";
const getAllApartmentsAction = (status) => async (dispatch) => {
  let { data } = await axios.get(getAllAppartments);
  console.log(data);
  dispatch({ type: "FETCHING_ALL_APARTMENTS", payload: data });
};

export default getAllApartmentsAction;
