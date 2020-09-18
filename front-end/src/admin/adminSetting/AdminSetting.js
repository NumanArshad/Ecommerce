import React from "react"
import {Route,Redirect} from "react-router-dom"
import { useSelector } from "react-redux"

const AdminSetting=({component:Component,...rest})=>{
    const{isAuthenticated,user:{role}}=useSelector(state=>state.authReducer)
    console.log(isAuthenticated,role)
    return(<Route {...rest}  render={(props)=>{
        return(!isAuthenticated && role!=="admin" ? <Component {...props}/>:
        <Redirect to={{pathname:"/login",state:{from:props.location}}} />
        )
    }}/>)
    }

    export default AdminSetting