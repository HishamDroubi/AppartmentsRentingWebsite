// no action file was required

const initstate = {
  response: false,
};

const loggingInReducer = (state = initstate, action) => {
  switch (action.type) {
    case "USER_LOGGING_IN":
      return {
        ...state,
        response: action.payload,
      };
    case "CHECKING_LOGIN_DATA":
      return {
        ...state,
        response: false,
      };
    default:
      return state;
  }
};

export default loggingInReducer;
