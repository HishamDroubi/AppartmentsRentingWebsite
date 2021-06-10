const initialState = {
  apartments: [],
  apartmentReservalions: [],
};
const getAllApartmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_ALL_APARTMENTS":
      return {
        ...state,

        apartments: action.payload,
      };
    case "APARTMENT_RESERVATIONS":
      return {
        ...state,

        apartmentReservalions: action.payload,
      };

    default:
      return state;
  }
};

export default getAllApartmentsReducer;
