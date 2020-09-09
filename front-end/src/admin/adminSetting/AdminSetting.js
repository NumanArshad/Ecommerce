import React from "react"
import {Route} from "react-router-dom"
import AdminContent from "./adminContent"
const AdminSetting=({component:Component,...rest})=>{
    return(<Route {...rest}  render={(props)=>{
        return(<AdminContent><Component {...props}/></AdminContent>)
    }}/>)
    }

    export default AdminSetting