const initialValue = {
  productsData: [],
  errMsg: [],
  orderData: [],
  cart: [],
  currentItem: null,
  productId: [],
};

const productsReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'POST_PRODUCT':
      return {
        ...state,
        productsData: action.payload,
      };
    case 'PUT_PRODUCT':
      return {
        ...state,
        productsData: action.payload,
      };
    case 'GET_PRODUCT_BY_ID':
      return {
        ...state,
        productId: action.payload,
      };
    case 'ADD_TO_CART':
      const item = state.productId.find((product) => product.id === action.payload.id);
      // Check if Item is in cart already
      const inCart = state.cart.find((item) => (item.id === action.payload.id ? true : false));

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) => (item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item))
          : [...state.cart, { ...item, qty: 1 }],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case 'ADJUST_ITEM_QTY':
      return {
        ...state,
        cart: state.cart.map((item) => (item.id === action.payload.id ? { ...item, qty: +action.payload.qty } : item)),
      };
    case 'LOAD_CURRENT_ITEM':
      return {
        ...state,
        currentItem: action.payload,
      };
    case 'SUKSES_ORDER':
      return {
        ...state,
        cart: [],
        currentItem: null,
      };
    default:
      return state;
  }
};

export default productsReducers;
