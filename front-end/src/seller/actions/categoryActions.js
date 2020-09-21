import {ALL_CATEGORIIES,START_LOADING,STOP_LOADING} from "../../utils/types"
import axios from "../../utils/httpInterceptors"

export const newCategory=(category)=>dispatch=>{

axios.post("/categories",category).then(res=>dispatch(allCategory()))
.catch(err=>alert(JSON.stringify(err)))
}


export const allCategory=(targetpage)=>dispatch=>{
    console.log("callled")
    dispatch({type:START_LOADING})
    axios.get(`/categories?_page=${targetpage}&_limit=${5}`).then(res=>{
        dispatch({type:STOP_LOADING})

        dispatch({type:ALL_CATEGORIIES,payload:res.data})
}
    )
    .catch(err=>alert(JSON.stringify(err)))
}