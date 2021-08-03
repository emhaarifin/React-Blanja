const initialValue = {
  productsData: [],
  errMsg: [],
};

const productsReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "POST_PRODUCT":
      return {
        ...state,
        productsData: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducers;
