import React from "react"
import SideBar from "./sideBar"
import Header from "./header"
// import AdminRoute from "./routes"

const AdminContent=(props)=>{
    return(
    <>  <h2>welcome to admin content</h2>
    <Header />
    <SideBar />
    belwo are routes
    <>{props.children}</>
    </>
  )
}
export default AdminContent