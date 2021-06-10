const initialState = {
  added: false,
};
const AddApartment = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_APPARTMENT":
      return {
        ...state,
        added: action.payload,
      };
    case "RESET":
      return {
        ...state,
        added: action.payload,
      };

    default:
      return state;
  }
};

export default AddApartment;
