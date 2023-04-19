import axios from "axios";
const URL='http://localhost:5000';
export const getProducts=async(dispatch)=>{
    try {
        let response=await axios.get(`${URL}/products`)
        dispatch({type:'success',value:response})
    } catch (error) {
        console.log('error while calling getproducts');
    }
}