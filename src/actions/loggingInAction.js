import axios from "axios";

import { loginURL } from "../api";
import isUserLoggedInAction from "./isUserLoggedInAction";
const loggingInAction = (formData) => async (dispatch) => {
  try {
    let { data } = await axios.post(loginURL, formData, {
      withCredentials: true,
    });
    dispatch({
      type: "USER_LOGGING_IN",
      payload: data,
    });
    data = JSON.parse(data);
    if (data.status == 1) {
      dispatch({
        type: "OPEN_LOGIN",
        payload: false,
      });
    }
    dispatch(isUserLoggedInAction());
  } catch (error) {
    console.log(error);
  }
};

export default loggingInAction;
