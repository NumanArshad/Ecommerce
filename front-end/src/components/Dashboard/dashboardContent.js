import React, { useEffect } from "react"
import Header from "../../common/layouts/header"
import style from "../../assets/css/dashboard.module.css"
import img from "../../assets/images/img.png"

const Dashboard = () => {
   
    return (
        <>
            <Header />
            <div className={style.image_container}>
                <img src={img} className={style.img_style} alt="img" />
                <div className={style.image_content}>
                    Welcome to ECommerce site
               </div>
              </div>

        </>
    )
}

export default Dashboard