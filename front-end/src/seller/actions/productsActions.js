import { ALL_PRODUCTS, START_LOADING, STOP_LOADING } from "../../utils/types";
import axios from "../../utils/httpInterceptors";
import updateQuery from "../../utils/queryParser";
export const newProduct = product => dispatch => {
  axios
    .post("/products", product)
    .then(
      res => alert(JSON.stringify(res.data))
      //dispatch(allCategory())
    )
    .catch(err => alert(JSON.stringify(err)));
};

export const allProducts = params => dispatch => {
  //console.log("callled");
  dispatch({ type: START_LOADING });
  axios.get(`/products?${updateQuery(params)}`).then(res => {
    dispatch({ type: STOP_LOADING });
    
    dispatch({ type: ALL_PRODUCTS, payload: res.data });
  });
  // .catch(err => alert(JSON.stringify(err)));
};
