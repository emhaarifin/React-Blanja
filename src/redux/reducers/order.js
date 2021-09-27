const initialValue = {
  orderData: [],
};

const orderReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'SUKSES_ALL_ORDER':
      return {
        ...state,
        orderData: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducers;
