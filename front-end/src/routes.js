import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, } from 'react-router-dom';
// import App from './App'
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
// import store from "./store/index"
// import {storeUser} from "./actions/auth"
import { useSelector } from 'react-redux';
import AdminRoute from "./admin/adminSetting/routes"
// import AdminDashboard from './admin/adminSetting/dashboard';
import AdminContent from './admin/adminSetting/adminContent';
// if(localStorage.getItem("token")){ //set in authReducer default
// store.dispatch(storeUser(localStorage.getItem("token")))
// }

const ProtectedRoute=({component:Component,...rest})=>{
    const {isAuthenticated}=useSelector(state=>state.authReducer)
    return(<Route {...rest} render={(props)=>{
        return (!isAuthenticated?<Component {...props} /> :<Redirect to={{pathname:"/login",state:{from:props.location}}} />)
    }} />)
}

const Root = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route path="/" exact component=+{App} /> */}
          
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <ProtectedRoute path="/dashboard" exact component={Dashboard} />
        <AdminRoute path="/admin/dashboard/:page?"  component={AdminContent} />
                <Redirect from="/" exact to="/dashboard"/>
            <Route  path="**" exact component={()=><h2>Not not found</h2>}/>
            
           
        </Switch>
    </BrowserRouter >
);
export default Root;
