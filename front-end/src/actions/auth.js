import axios from "../utils/httpInterceptors"
import {AUTH_SUCCESS} from "../utils/types"
import history from "../utils/customHistory"
import JwtDecode from "jwt-decode"
export const login=(authBody)=>dispatch=>{
  axios.post("/login",authBody)
  .then(res=>
    {
        if(res.status===200){
            dispatch(storeUser(res.data.token))
        }
   
})
}
export const register=(authBody)=>dispatch=>{
    axios.post("/register",authBody).then(res=>{ 
        if(res.status===200){
        dispatch(storeUser(res.data.token))
    }
    })
}

export const logout=()=>dispatch=>{
    localStorage.clear()
    history.replace('/login')
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

