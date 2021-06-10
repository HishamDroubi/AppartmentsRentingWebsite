const initialState = {
  userStatus: false,
  token: "",
};
const isUserLoggedInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_STATUS":
      return { ...state, userStatus: action.payload };
    case "SET_TOKEN":
      return { ...state, token: action.payload };

    default:
      return state;
  }
};

export default isUserLoggedInReducer;
