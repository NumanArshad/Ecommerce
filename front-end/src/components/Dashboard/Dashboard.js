import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchProducts } from "../../actions/products"

import Header from "../../common/layouts/header"
import style from "../../assets/css/dashboard.module.css"
import img from "../../assets/images/img.png"

const Dashboard = () => {
   
    return (
      
            <div className={style.image_container}>
                <img src={img} className={style.img_style} alt="img" />
                <div className={style.image_content}>
                    Welcome to ECommerce site
               </div>
              </div>

    
    )
}

export default Dashboard