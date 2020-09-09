import {ALL_PRODUCTS} from "../utils/types"
import axiosInstance from "../utils/httpInterceptors"
export const fetchProducts=()=>dispatch=>{
  axiosInstance.get("/products").then(res=>{
      dispatch({type:ALL_PRODUCTS,payload:res.data})}
        )

}