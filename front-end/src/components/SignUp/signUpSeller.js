import React, { useState } from "react";
import { register } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../common/layouts/inputField";
import { useLocation } from "react-router-dom";
const NewSeller = () => {
  const location = useLocation();

  const { pathname } = location;
  const [formData, handleForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    country: "",
    postCode: "",
    city: "",
    address: "",
    role: pathname === "/signup" ? "customer" : "seller"
  });

  const {
    firstName,
    lastName,
    email,
    contact,
    address,
    country,
    postCode
  } = formData;

  const handleChange = e => {
    const { name, value } = e.target;
    handleForm({ ...formData, [name]: value });
  };

  const handleSubmit = () => {};

  return (
    <div class="container">
      <div class="card">
        <div class={`form row card-body`}>
          <InputField
            label="First Name"
            name="firstName"
            placeholder="name here"
            value={firstName}
            onChange={handleChange}
            classes={`col-md-4  mb-3  col-sm-6 mb-3`}
          />
          <InputField
            label="Last Name"
            name="lastName"
            placeholder="name here"
            value={lastName}
            onChange={handleChange}
            classes={`col-md-4  mb-3 col-sm-6 mb-3`}
          />
          <InputField
            label="Email"
            name="email"
            placeholder="email here"
            value={email}
            onChange={handleChange}
            classes={`col-md-4  mb-3 col-sm-6 mb-3`}
          />
          <InputField
            label="Contact"
            name="contact"
            value={contact}
            onChange={handleChange}
            placeholder="name here"
            classes={`col-md-4  mb-3 col-sm-6 mb-3`}
          />
          <InputField
            label="Postal Code"
            name="postalCode"
            value={postCode}
            onChange={handleChange}
            placeholder="postal code here"
            classes={`col-md-4  mb-3 col-sm-6 mb-3`}
          />
          <InputField
            label="Country"
            name="country"
            value={country}
            onChange={handleChange}
            placeholder="country here"
            classes={`col-md-4  mb-3 col-sm-6 mb-3`}
          />
          <InputField
            label="Address"
            name="address"
            value={address}
            onChange={handleChange}
            placeholder="name here"
            classes="col-12 mb-3"
          />
          <button class="btn btn-primary ml-3" onClick={handleSubmit}>
            Save
          </button>
          <button class="btn btn-danger ml-2">Cancel</button>
        </div>
      </div>
    </div>
  );
};
export default NewSeller;
