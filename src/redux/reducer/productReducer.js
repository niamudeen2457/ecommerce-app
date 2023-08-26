const initalState = {
  products: []
};

const productReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default productReducer;
