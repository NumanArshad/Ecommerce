import React from "react"
import {BrowserRouter,Switch, Redirect,Route} from "react-router-dom"
import AdminDashboard from "./dashboard"
import AdminContent from "./adminContent"
import NewProduct from "./addProducts"
import AdminSetting from "./AdminSetting"

const AdminRoute=()=>{
    return(<BrowserRouter>
    <Switch>
        <Redirect from="/admin/dashboard/" exact to="/admin/dashboard/main" />
        <AdminSetting path="/admin/dashboard/main" exact component={AdminDashboard} />
        <AdminSetting path="/admin/dashboard/new" exact component={NewProduct} />
        <Route  path="**" exact component={()=><h2>Not dashboard found</h2>}/>
          
    </Switch>
    </BrowserRouter>)
}

export default AdminRoute