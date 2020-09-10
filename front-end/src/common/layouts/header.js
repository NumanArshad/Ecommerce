import React from "react"
import style from "../../assets/css/header.module.css" //responsive
import {useHistory} from "react-router-dom"
const Header = () => {
    const history=useHistory()
    return (<div className={`${style.container} ${style.responsive}`}>
        <div onClick={()=>history.push("/dashboard")}>
            Home
      </div>
        <div>Users</div>
      
        <div onClick={()=>history.push("/admin/dashboard/products")}>
            Products
          </div>
        <div>Categories</div>
        <div className={style.dropdown}>
            Account
            <div className={style.dropdown_content}>
                <div>Login </div>
                <div onClick={()=>history.replace("/login")}>SignUp</div>
            </div>
       </div>
       
    </div>)
}

export default Header