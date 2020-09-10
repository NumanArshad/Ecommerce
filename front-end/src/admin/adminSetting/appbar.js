import React from "react"
import style from "../../assets/css/header.module.css" //responsive
import {useHistory} from "react-router-dom"
const Appbar = () => {
    const history=useHistory()
  
    return (<div className={`${style.container} ${style.responsive}`}>
        <div onClick={()=>history.push("/admin/dashboard")}>
            Home
      </div>
        <div>Users</div>
      
        <div className={style.dropdown}>
            Products
            <div className={style.dropdown_content}>
                <div onClick={()=>history.push("/admin/dashboard/products/new")}>Add Products </div>
                <div onClick={()=>history.push("/admin/dashboard/products")}>All Products</div>
            </div>
       </div>
        <div>Categories</div>
        <div className={style.dropdown}>
            Logout
            <div className={style.dropdown_content}>
                <div>View profile </div>
                <div onClick={()=>history.replace("/login")}>Logout</div>
            </div>
       </div>
       
    </div>)
}

export default Appbar