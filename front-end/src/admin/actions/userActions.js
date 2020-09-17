import {ALL_USERS,START_LOADING,STOP_LOADING} from "../../utils/types"
import axios from "../../utils/httpInterceptors"

export const newUser=(user)=>dispatch=>{

axios.post("/admin_users",user).then(res=>alert(JSON.stringify(res.data)))
.catch(err=>alert(JSON.stringify(err)))
}


export const allUser=(targetpage)=>dispatch=>{
    console.log("callled")
    dispatch({type:START_LOADING})
    axios.get(`/admin_users?_page=${targetpage}&_limit=${5}`).then(res=>{
        dispatch({type:STOP_LOADING})

        dispatch({type:ALL_USERS,payload:res.data})
}
    )
    .catch(err=>alert(JSON.stringify(err)))
}