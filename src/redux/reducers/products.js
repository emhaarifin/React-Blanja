const initialValue = {
  productsData: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const productsReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "GET_PRODUCTS_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case "GET_PRODUCTS_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        productsData: action.payload.data,
      };
    case "GET_PRODUCTS_BY_ID_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "GET_PRODUCTS_BY_ID_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case "GET_PRODUCTS_BY_ID_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        productsData: action.payload.data,
      };
    case "POST_PRODUCTS_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "POST_PRODUCTS_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case "POST_PRODUCTS_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        productsData: action.payload.data,
      };
    case "PATCH_PRODUCTS_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "PATCH_PRODUCTS_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case "PATCH_PRODUCTS_FULLFILLED":
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        productsData: action.payload.data,
      };
    case "DELETE_PRODUCTS_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "DELETE_PRODUCTS_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case "DELETE_PRODUCTS_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        productsData: action.payload.data,
      };
    case "SEARCH_PRODUCTS_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "SEARCH_PRODUCTS_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errorMsg: action.payload.data,
      };
    case "SEARCH_PRODUCTS_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        productsData: action.payload.data,
      };
    case "SORT_PRODUCTS_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "SORT_PRODUCTS_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errorMsg: action.payload.data,
      };
    case "SORT_PRODUCTS_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        productsData: action.payload.data,
      };
    default:
      return state;
  }
};

export default productsReducers;
