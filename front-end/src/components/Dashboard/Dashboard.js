import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../actions/products"
import Products from "./products"
import Header from "../../common/layouts/header"
import style from "../../assets/css/body_content.module.css"
import style2 from "../../assets/css/login.module.css"
const Dashboard = () => {
    const dispatch = useDispatch()

    const { products } = useSelector(state => state.productReducer)
    useEffect(() => {
        dispatch(fetchProducts())

    }, [dispatch])
    return (
        <>
            <Header />
            <div className={style.body_container}>
                

                <div className={style2.login_container}>

                   

                    <input type="text" placeholder="name" name="email" 
                       />
                    <input type="text" placeholder="quantity" name="password" />
                   
                  
                    
                </div>

                <Products products={products} />
            </div>

        </>
    )
}

export default Dashboard