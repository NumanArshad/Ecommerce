import React from "react"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import AdminDashboard from "./dashboard"

import CreateEditProduct from "../components/products/createEditProduct"
import Products from "../components/products/Products"
const AdminRoute=()=>{
    return(
    <Switch>
        {/* <Redirect from="/admin/dashboard/" exact to="/admin/dashboard/main" /> */}
        <Route path="/admin/dashboard" exact component={AdminDashboard} />
      <Route path="/admin/dashboard/products/new" exact component={CreateEditProduct} />
            <Route path="/admin/dashboard/products" exact component={Products} />
            <Route  path="*" exact component={()=><h2>Not dashboard found</h2>}/>
    </Switch>
  )
}

export default AdminRoute