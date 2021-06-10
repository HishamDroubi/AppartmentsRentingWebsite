export const base_url = "http://localhost/Software_Project_APIS";

//login
export const loginURL = `${base_url}/login/login.php`;
export const loginStatus = `${base_url}/login/checklogin.php`;
export const logoutURL = `${base_url}/login/logout.php`;

// filter
export const filterByPrice = `${base_url}/appartments/filterByPrice.php`;
export const getAllAppartments = `${base_url}/appartments/getAllAppartments.php`;
export const getAppartmentReservations = `${base_url}/appartments/getAppartmentReservations.php`;
export const getPictures = `${base_url}/appartments/getPictures.php`;

// cities
export const getAllCities = `${base_url}/cities/getAllCities.php`;
export const getCityAppartments = `${base_url}/cities/getCityAppartments.php`;
// subcities
export const getAllSub_CitiesForCity = `${base_url}/sub_cities/getAllSub_CitiesForCity.php`;
export const getSub_CityAppartments = `${base_url}/sub_cities/getSub_CityAppartments.php`;
// customer
export const addAppartment = `${base_url}/customers/addAppartment.php`;
export const getAllCustomerData = `${base_url}/customers/getAllCustomerData.php`;
export const getCustomerReservations = `${base_url}/customers/getCustomerReservations.php`;
export const removeAppartment = `${base_url}/customers/removeAppartment.php`;
export const reserveAppartment = `${base_url}/customers/reserveAppartment.php`;
export const signupCustomer = `${base_url}/customers/signupCustomer.php`;
export const updateCustomer = `${base_url}/customers/updateCustomer.php`;
