import React from "react"
import {Link} from "react-router-dom"
export default function BreadCrumb({breads}){
    return(<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      {/* <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Library</li> */}
      {breads.map(({id,name,url})=>{
          return <li key={id} class={`breadcrumb-item` } aria-current="page"> <Link to={url} > {name}</Link></li>
      })}
    </ol>
  </nav>
  )
}