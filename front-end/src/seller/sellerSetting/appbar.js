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
        <ul>
          <li onClick={() => history.push("/seller/dashboard")}>
            <a href="#">Home</a>
          </li>
         
          <li>
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

             <li>
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

          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </div>
    </>
    // <div className={`${style.container} ${style.responsive}`}>
    //     <div onClick={()=>history.push("/seller/dashboard")}>
    //         Home
    //   </div>
    //     <div  onClick={()=>history.push("/seller/dashboard/users")}>Users</div>

    //     <div className={style.dropdown}>
    //         Products
    //         <div className={style.dropdown_content}>
    //             <div onClick={()=>history.push("/seller/dashboard/products/new")}>Add Products </div>
    //             <div onClick={()=>history.push("/seller/dashboard/products")}>All Products</div>
    //         </div>
    //    </div>

    //    <div className={style.dropdown}>
    //         Categories
    //         <div className={style.dropdown_content}>
    //             <div onClick={()=>history.push("/seller/dashboard/categories/new")}>Add Category </div>
    //             <div onClick={()=>history.push("/seller/dashboard/categories")}>All Categories</div>
    //         </div>
    //    </div>
    //     <div className={style.dropdown}>
    //         Logout
    //         <div className={style.dropdown_content}>
    //             <div>View profile </div>
    //             <div onClick={()=>history.replace("/login")}>Logout</div>
    //         </div>
    //    </div>

    // </div>
  );
};

export default Appbar;
