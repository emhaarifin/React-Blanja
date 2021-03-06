const initialValue = {
  userData: {},
  userDataID: {},
  errorMsg: {},
  address: [],
};

const userReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'POST_LOGIN':
      return {
        ...state,
        userData: action.payload,
      };
    case 'POST_LOGIN_ERROR':
      return {
        ...state,
        errorMsg: action.payload,
      };
    case 'POST_REGISTER':
      return {
        ...state,
        userData: action.payload,
      };
    case 'POST_REGISTER_ERROR':
      return {
        ...state,
        errorMsg: action.payload,
      };
    case 'GET_USER_BY_ID':
      return {
        ...state,
        userData: action.payload,
      };
    case 'GET_ADDRESS':
      return {
        ...state,
        address: action.payload,
      };
    case 'POST_ADDRESS':
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};

export default userReducers;
