import React from "react"
import style from "../../assets/css/header.module.css"
const Header = () => {
    return (<div className={style.container}>
        <div>
            Home
      </div>
        <div>Users</div>
      
        <div className={style.dropdown}>
            Products
            <div className={style.dropdown_content}>
                <div>Add Products </div>
                <div>All Products</div>
            </div>
       </div>
        <div>Categories</div>
        <div className={style.dropdown}>
            Logout
            <div className={style.dropdown_content}>
                <div>View profile </div>
                <div>Logout</div>
            </div>
       </div>
       
    </div>)
}

export default Header