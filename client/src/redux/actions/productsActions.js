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

export const getProductDetails=(id)=>async(dispatch)=>{
  try {
    dispatch({type:actionTypes.GET_PRODUCT_DETAIL_REQUEST});
    const { data } = await axios.get(`${URL}/products/${id}`);
    dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_FAIL, payload: error.message });
  }
}