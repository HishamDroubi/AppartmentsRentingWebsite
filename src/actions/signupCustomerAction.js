import axios from "axios";
import { signupCustomer } from "../api";

const signupCustomerAction = (details) => async (dispatch) => {
  dispatch({ type: "SIGNING_CUS_UP" });
  let { data } = await axios.post(signupCustomer, details, {
    withCredentials: true,
  });
  console.log(data);
  dispatch({ type: "CUSTOMER_SIGNUP", payload: data });
};
export default signupCustomerAction;
