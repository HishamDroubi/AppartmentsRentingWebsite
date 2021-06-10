import { combineReducers } from "redux";
// redux form
import { reducer as formReducer } from "redux-form";

// reducers
import loggingInReducer from "./loggingInReducer";
import isUserLoggedInReducer from "./isUserLoggedInReducer";
import signupReducer from "./signupReducer";
import userDataReducer from "./userDataReducer";
import updateCustomerReducer from "./updateCustomerReducer";
import getCustomerDealsReducer from "./getCustomerDealsReducer";
import tokenReducer from "./tokenReducer";
import getAllApartmentsReducer from "./getAllApartmentsReducer";
import ApartmentPic from "./ApartmentPic";
import Popup from "./Popup";
import getAllCitiesReducer from "./getAllCitiesReducer";
import AddApartment from "./AddApartment";

const rootReducer = combineReducers({
  userLogin: loggingInReducer,
  userStatus: isUserLoggedInReducer,
  signup: signupReducer,
  userDetails: userDataReducer,
  updateCustomer: updateCustomerReducer,
  getCustomerDeals: getCustomerDealsReducer,
  getAllApartments: getAllApartmentsReducer,
  ApartmentPic: ApartmentPic,
  getAllCities: getAllCitiesReducer,
  token: tokenReducer,
  Popup: Popup,
  form: formReducer,
  AddApartment: AddApartment,
});
export default rootReducer;
