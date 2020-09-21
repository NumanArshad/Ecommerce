import React from "react";
import { Switch, Route } from "react-router-dom";
import SellerDashboard from "./dashboard";
import CreateEditCategory from "../components/categories/createEditCategories";
import CreateEditProduct from "../components/products/createEditProduct";
import Products from "../components/products/Products";
import Categories from "../components/categories/categories";
const SellerRoute = () => {
  return (
    <Switch>
      {/* <Redirect from="/seller/dashboard/" exact to="/seller/dashboard/main" /> */}
      <Route path="/seller/dashboard" exact component={SellerDashboard} />
     
   
      <Route path="/seller/dashboard/products" exact component={Products} />
      <Route
        path="/seller/dashboard/products/new"
        exact
        component={CreateEditProduct}
      />
      <Route
        path="/seller/dashboard/categories/new"
        exact
        component={CreateEditCategory}
      />
      <Route path="/seller/dashboard/categories" exact component={Categories} />
      <Route path="*" exact component={() => <h2>Not dashboard found</h2>} />
    </Switch>
  );
};

export default SellerRoute;
