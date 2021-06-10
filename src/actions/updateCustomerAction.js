import axios from "axios";
import { updateCustomer } from "../api";

const updateCustomerAction = (details) => async (dispatch) => {
  dispatch({ type: "UPDATEING_CUSTOMER" });

  let { data } = await axios.post(updateCustomer, details, {
    withCredentials: true,
  });
  dispatch({ type: "UPDATE_CUSTOMER", payload: data });
};

export default updateCustomerAction;
