import axios from "axios";
import * as actionTypes from "../../constants/productConstants";
const URL='http://localhost:5000';

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/products`);
      console.log(data,'abhishek')
      dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: error.message });
    }
  };
};