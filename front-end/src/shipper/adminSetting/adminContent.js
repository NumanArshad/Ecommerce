import React from "react"
import Appbar from "./appbar"

import AdminRoute from "./routes"
import mainStyle from "../../assets/css/common_styles.module.css"
const AdminContent=()=>{
    return(
    <>  
    <Appbar />
    <div className={mainStyle.main}>
    <AdminRoute />
    </div>
    
    </>
  )
}
export default AdminContent