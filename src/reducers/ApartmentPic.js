const initialState = {
  pic: [],
};
const ApartmentPic = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PIC":
      return {
        ...state,
        pic: action.payload,
      };

    default:
      return state;
  }
};

export default ApartmentPic;
