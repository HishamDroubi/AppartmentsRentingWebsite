//customer
import axios from "axios";
import { addAppartment } from "../api";
import { getCustomerReservations } from "../api";
import { getAllCustomerData } from "../api";
import { removeAppartment } from "../api";
import { reserveAppartment } from "../api";
import { getAppartmentReservations } from "../api";
import { signupCustomer } from "../api";
import { updateCustomer } from "../api";
import { getAllCities } from "../api";
import { getCityAppartments } from "../api";
import { getAllSub_CitiesForCity } from "../api";
import { getSub_CityAppartments } from "../api";
import { filterByPrice } from "../api";

let url = "";
export const addAppartmentAction = (formdata) => async (dispatch) => {
  let { data } = await axios.post(addAppartment, formdata, {
    withCredentials: true,
  });
  console.log(data);
  dispatch({ type: "ADD_APPARTMENT", payload: data });
};

export const getCustomerReservationsAction =
  (cutstomer_id) => async (dispatch) => {
    let { data } = await axios.get(getCustomerReservations, {
      params: { cutstomer_id },
    });
    dispatch({ type: "GET_CUSTOMER_RESERVATION", payload: data });
  };

export const getAllCustomerDataAction = () => async (dispatch) => {
  let { data } = await axios.get(getAllCustomerData, {
    withCredentials: true,
  });
  console.log("customer_data", data);
  dispatch({ type: "FETCHINF_USER_DATA", payload: data });
};

export const getAppartmentReservationsAction =
  (appartment_id) => async (dispatch) => {
    let { data } = await axios.get(getAppartmentReservations, {
      withCredentials: true,
      params: { appartment_id },
    });
    dispatch({ type: "APARTMENT_RESERVATIONS", payload: data });
  };

export const removeAppartmentAction = (formdata) => async (dispatch) => {
  let { data } = await axios.post(url, formdata, { withCredentials: true });
  console.log(data);
  dispatch({ type: "REMOVE_APPARTMENT", payload: data });
};

export const removeFromWishlistAction = (formdata) => async (dispatch) => {
  let { data } = await axios.post(url, formdata, { withCredentials: true });
  console.log(data);
  dispatch({ type: "REMOVE_FROM_WHISHLIST", payload: data });
};

export const reserveAppartmentAction = async (formdata) => {
  let { data } = await axios.post(reserveAppartment, formdata, {
    withCredentials: true,
  });
  console.log(data);
};

export const signupCustomerAction = (formdata) => async (dispatch) => {
  let { data } = await axios.post(url, formdata);
  console.log(data);
  dispatch({ type: "SIGNUP_CUSTOMER", payload: data });
};

export const updateCustomerAction = (formdata) => async (dispatch) => {
  let { data } = await axios.post(url, formdata, { withCredentials: true });
  console.log(data);
  dispatch({ type: "UPDATE_CUSTOMER", payload: data });
};
//cities
export const getAllCitiesAction = () => async (dispatch) => {
  let { data } = await axios.get(getAllCities);
  dispatch({ type: "FETCHING_ALL_CITIES", payload: data });
};
export const getCityAppartmentsAction = (city_id) => async (dispatch) => {
  let { data } = await axios.get(getCityAppartments, { params: { city_id } });
  console.log("fetched", data);
  dispatch({ type: "FETCHING_ALL_APARTMENTS", payload: data });
};
//sub_cities
export const getAllSub_CitiesForCityAction = (city_id) => async (dispatch) => {
  let { data } = await axios.get(getAllSub_CitiesForCity, {
    params: { city_id },
  });
  dispatch({ type: "FETCHING_ALL_SUB_CITIES", payload: data });
};
export const getSub_CityAppartmentsAction =
  (sub_city_id) => async (dispatch) => {
    let { data } = await axios.get(getSub_CityAppartments, {
      params: { sub_city_id },
    });
    dispatch({ type: "FETCHING_ALL_APARTMENTS", payload: data });
  };
export const filterByPriceAction =
  (min_price, max_price) => async (dispatch) => {
    let { data } = await axios.get(filterByPrice, {
      params: { min_price, max_price },
    });
    dispatch({ type: "FETCHING_ALL_APARTMENTS", payload: data });
  };
