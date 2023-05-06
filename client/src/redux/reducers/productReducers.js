import * as actionTypes from "../../constants/productConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_SUCCESS:
      return { products: action.payload };
    case actionTypes.GET_PRODUCT_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAIL_REQUEST:
      return { loading: true };
    case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload };
    case actionTypes.GET_PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.GET_PRODUCT_DETAIL_RESET:
      return { product: {} };
    default:
      return state;
  }
};
