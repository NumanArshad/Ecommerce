import React from "react"
import Appbar from "./appbar"

import AdminRoute from "./routes"
const AdminContent=()=>{
    return(
    <>  
    <Appbar />
<div class="main">
<AdminRoute />

</div>

    
    
    </>
  )
}
export default AdminContent