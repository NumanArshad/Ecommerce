import React, { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import {fetchProducts} from "../../actions/products"
import Products from "./products"
const Dashboard=()=>{
    const dispatch=useDispatch()
   
    const {products}=useSelector(state=>state.productReducer)
    useEffect(()=>{
        dispatch(fetchProducts())

    },[dispatch])
    return(
    <>    <h1>Dashboard here</h1>
    <Products products={products}/>
    </>
)
}

export default Dashboard