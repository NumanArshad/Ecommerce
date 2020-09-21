import React from "react"
import SideBar from "./filterProducts"
import Products from "./products"
import FilterProducts from "./filterProducts"
import queryString from "query-string"
export default function Home(props){
    const search=queryString.parse(props.location.search)
    console.log(search)
    return(<div class="m-auto row justify-content-between align-items-start"><FilterProducts /><Products /></div>)
}