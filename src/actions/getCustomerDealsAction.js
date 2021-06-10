import axios from "axios";
import { getCustomerReservations } from "../api";
const getAllCarsAction = () => async (dispatch) => {
  dispatch({ type: "LOADING_ALL_CUSTOMER_DEALS" });
  let { data } = await axios.get(getCustomerReservations, {
    withCredentials: true,
  });
  dispatch({ type: "FETCHING_ALL_CUSTOMER_DEALS", payload: data });
};

export default getAllCarsAction;
