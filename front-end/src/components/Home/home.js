import React from "react"
import SideBar from "./filterProducts"
import Products from "./products"
import FilterProducts from "./filterProducts"
export default function Home(){
    return(<div class="m-auto row justify-content-between align-items-start"><FilterProducts /><Products /></div>)
}