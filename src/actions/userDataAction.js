import axios from "axios";
import { getAllCustomerData } from "../api";

const userDataAction = () => async (dispatch) => {
  dispatch({ type: "LOADING_USER_DATA_AND_RESET" });
  let { data } = await axios.get(getAllCustomerData, {
    withCredentials: true,
  });
  console.log(data);
  dispatch({ type: "FETCHINF_USER_DATA", payload: data });
};

export default userDataAction;
