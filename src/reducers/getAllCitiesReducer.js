const initialState = {
  cities: [],
  subcities: [],
};
const getAllCitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_ALL_CITIES":
      return {
        ...state,
        cities: action.payload,
      };
    case "FETCHING_ALL_SUB_CITIES":
      return {
        ...state,
        subcities: action.payload,
      };

    default:
      return state;
  }
};

export default getAllCitiesReducer;
