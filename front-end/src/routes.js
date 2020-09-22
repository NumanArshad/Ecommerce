import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import App from './App'
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";

import { useSelector } from "react-redux";
import Products from "./components/Dashboard/products";
import AdminContent from "./admin/adminSetting/adminContent";

import AdminSetting from "./admin/adminSetting/AdminSetting";
import SellerContent from "./seller/sellerSetting/sellerContent";

import SellerSetting from "./seller/sellerSetting/SellerSetting";
import Home from "./components/Home/home";
import AddProduct from "./components/placeOrder/addProduct"
import ShoppingCart from "./components/placeOrder/manageCart";
import NewSeller from "./components/SignUp/signUpSeller"
// if(localStorage.getItem("token")){ //set in authReducer default
// store.dispatch(storeUser(localStorage.getItem("token")))
// }

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {
    isAuthenticated,
    user: { role },
  } = useSelector((state) => state.authReducer);
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthenticated && role == "customer" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

const Root = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/" exact component=+{App} /> */}

      <Route path="/login" exact component={Login} />
      <ProtectedRoute path="/dashboard" exact component={Dashboard} />
      <ProtectedRoute path="/products" exact component={Products} />
      <AdminSetting path="/admin/dashboard/:page?" component={AdminContent} />
      <SellerSetting path="/seller/dashboard/:page?" component={SellerContent} />

      <Route path="/home:vl?" component={Home} />
      <Route path="/preview" component={AddProduct} />
      <Route path="/cart" component={ShoppingCart} />
      <Route path="/new_seller" component={NewSeller} />
      <Route path="/signup" component={NewSeller} />
      <Redirect from="/" exact to="/home" />
      <Route path="*" exact component={() => <h2>Not not found</h2>} />
    </Switch>
  </BrowserRouter>
);
export default Root;
