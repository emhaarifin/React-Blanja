const initialValue = {
  userData: {},
  errorMsg: {},
};

const userReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "POST_LOGIN":
      return {
        ...state,
        userData: action.payload,
      };
    case "POST_LOGIN_ERROR":
      return {
        ...state,
        errorMsg: action.payload,
      };
    case "POST_REGISTER":
      return {
        ...state,
        userData: action.payload,
      };
    case "POST_REGISTER_ERROR":
      return {
        ...state,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default userReducers;
