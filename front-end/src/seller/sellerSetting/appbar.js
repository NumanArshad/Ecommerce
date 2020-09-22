import React from "react";
import style from "../../assets/css/header.scss"; //responsive
import { useHistory } from "react-router-dom";

const Appbar = () => {
  const history = useHistory();

  return (
    <>
      <div class="menu_header">
        <i class="fa fa-bars"></i>
      </div>
      <div class="menu_content">
        <span class="logo">KhareedLo</span>
        <ul class="nav_bar">
          <li  class="nav_link" onClick={() => history.push("/seller/dashboard")}>
            <a class="nav_content" href="#">Home</a>
          </li>
         
          <li class="nav_link">
            <a href="#" class="toggle_btn">
              Products
            </a>
            <ul class="dropdwn">
              <li>
                <a
                  href="#"
                  onClick={() => history.push("/seller/dashboard/products/new")}
                >
                  Add
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => history.push("/seller/dashboard/products")}
                >
                  All
                </a>
              </li>
            </ul>
          </li>

             <li class="nav_link">
            <a href="#" class="toggle_btn">
              Categories
            </a>
            <ul class="dropdwn">
              <li>
                <a
                  href="#"
                  onClick={() => history.push("/seller/dashboard/categories/new")}
                >
                  Add
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => history.push("/seller/dashboard/categories")}
                >
                  All
                </a>
              </li>
            </ul>
          </li>

          <li class="nav_link">
            <a class="nav_content" href="#">Services</a>
          </li>
          <li class="nav_link">
            <a class="nav_content" href="#">Contacts</a>
          </li>
        </ul>
      </div>
    </>
    
  );
};

export default Appbar;
