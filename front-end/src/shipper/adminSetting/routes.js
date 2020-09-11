import React from "react"
import {Switch,Route} from "react-router-dom"
import AdminDashboard from "./dashboard"
import CreateEditCategory from "../components/categories/createEditCategories"
import CreateEditProduct from "../components/products/createEditProduct"
import Products from "../components/products/Products"
import Categories from "../components/categories/categories"
import New from "../components/products/newProduct"
import Users from "../components/Users/users"
const AdminRoute=()=>{
    return(
    <Switch>
        {/* <Redirect from="/admin/dashboard/" exact to="/admin/dashboard/main" /> */}
        <Route path="/admin/dashboard" exact component={AdminDashboard} />
      <Route path="/admin/dashboard/users/new" exact component={CreateEditProduct} />
      <Route path="/admin/dashboard/users" exact component={Users} />
            <Route path="/admin/dashboard/products" exact component={Products} />
            <Route path="/admin/dashboard/products/new" exact component={New} />
            <Route path="/admin/dashboard/categories/new" exact component={CreateEditCategory} />
            <Route path="/admin/dashboard/categories" exact component={Categories} />
            <Route  path="*" exact component={()=><h2>Not dashboard found</h2>}/>
    </Switch>
  )
}

export default AdminRoute