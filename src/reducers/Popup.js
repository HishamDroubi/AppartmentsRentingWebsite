const Popup = (state = { openLogin: false, openSignup: false }, action) => {
  switch (action.type) {
    case "OPEN_LOGIN":
      return { ...state, openLogin: action.payload };
    case "OPEN_SIGNUP":
      return { ...state, openSignup: action.payload };

    default:
      return state;
  }
};

export default Popup;
