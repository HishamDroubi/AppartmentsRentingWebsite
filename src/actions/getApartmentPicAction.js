import axios from "axios";
import { getPictures } from "../api";
const getApartmentPicAction = (appartment_id) => async (dispatch) => {
  let { data } = await axios.get(getPictures, {
    params: { appartment_id },
  });
  dispatch({ type: "GET_PIC", payload: data });
};

export default getApartmentPicAction;
