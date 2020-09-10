import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../actions/products"
import Products from "./products"
import Header from "../../common/layouts/header"
import style from "../../assets/css/body_content.module.css"
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
                


                   
            <label>Name</label>
                    <input type="text"  placeholder="name" name="email" 
                       />
                         <label>Quantity</label>
                    <input type="text" placeholder="quantity" name="password" />
                   
                  
          

                <Products products={products} />
            </div>

        </>
    )
}

export default Dashboard