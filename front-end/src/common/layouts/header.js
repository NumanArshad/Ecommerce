import React from "react";
import "../../assets/css/header.scss"; //responsive

// import history from "../../utils/customHistory"
// import "../../assets/css/app.css";
const Header = () => {
  // const history=useHistory()

  return (
    <>
      <div class="menu_header">
        <i class="fa fa-bars"></i>
      </div>
      <div class="menu_content">
        <span class="logo">KhareedLo</span>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#" class="toggle_btn">
              About
            </a>
            <ul class="dropdwn">
              <li>
                <a href="#">sub1</a>
              </li>
              <li>
                <a href="#">sub2</a>
              </li>
              <li>
                <a href="#">sub3</a>
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
  );
};

export default Header;
