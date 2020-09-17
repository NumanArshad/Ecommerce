import React from "react";
import  "../../assets/css/header.module.scss"; //responsive

// import history from "../../utils/customHistory"
// import "../../assets/css/app.css";
const Header = () => {
  // const history=useHistory()
const handleToggle=e=>{
  e.preventDefault();
  alert("called")
  document.getElementsByClassName("dropdwn")[0].classList.toggle("display")
}
  return (
    <>
      {/* <ul>
        <li>
          <a href="#">menu</a>
        </li>
        <li>
          <a href="#">about</a>
          <ul className="dropdown">
            <li>
              <a href="#">menu</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">services</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">services</a>
        </li>
      </ul> */}
      <div className="menu_header"><i className="fa fa-bars"></i></div>
      <ul className="menu_content">
          <li >
            <a href="#">Home</a>
          </li>
          <li >
            <a href="#" onClick={handleToggle}>About</a>
            <ul className="dropdwn">
              <li>
                <a href="#" >sub1</a>
              </li>
              <li>
                <a href="#">sub2</a>
              </li>
              <li>
                <a href="#">sub3</a>
              </li>
            </ul>
          </li>

          <li >
            <a href="#">Services</a>
          </li>
          <li >
            <a href="#">Contacts</a>
          </li>
        </ul>
       
    </>
  );
};

export default Header;
