import axiosInstance from "../utils/httpInterceptors"
import {AUTH_SUCCESS,AUTH_FAILED} from "../utils/types"

import JwtDecode from "jwt-decode"
export const login=(authBody)=>dispatch=>{
  axiosInstance.post("/login",authBody).
then(res=>
    {console.log(JSON.stringify(res))
    dispatch(storeUser(res.data.token))
})
}
export const register=(authBody)=>dispatch=>{
    axiosInstance.post("/register",authBody).
    then(res=>dispatch(storeUser(res.data.token)))
}

export const logout=()=>dispatch=>{
    localStorage.clear()
}

export const decodeJwt=token=>{
    if(token){
        var {user}=JwtDecode(token)
    }
   return user
}

export const storeUser=(token)=>dispatch=>{
//alert(JSON.stringify(token))
    localStorage.setItem("token",token)
    dispatch({type:AUTH_SUCCESS,payload:decodeJwt(token)})
}

