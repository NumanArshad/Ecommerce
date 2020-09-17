import React, { useState } from "react";
import { useDispatch } from "react-redux";
import mainStyle from "../../../assets/css/common_styles.module.css";
import InputField from "../../../common/layouts/inputField";
import {newUser} from "../../actions/userActions"
const CreateEditUsers = () => {
  const [formData,handleForm]=useState({first:'',last:'',email:'',contact:'',country:'',
postcode:'',city:'',address:'',role:''})
const handleChange=e=>{
  const {name,value}=e.target
  handleForm({...formData,[name]:value})
}

const dispatch=useDispatch();

const handleSubmit=()=>{

  dispatch(newUser(formData))

}

  return (
    <div className={mainStyle.body_container}>
      <div className={mainStyle.form_container}>
        <InputField
          placeholder="first name"
          name="first" onChange={handleChange}
          classes={`${mainStyle.form_control} ${mainStyle.input_margin}`}
          label="FirstName"
        />
        <InputField
          placeholder="last name"
          name="last" onChange={handleChange}
          classes={`${mainStyle.form_control} ${mainStyle.input_margin}`}
          label="LastName"
        />
  <InputField
          placeholder="email"
          name="email" onChange={handleChange}
          classes={`${mainStyle.form_control}`}
          label="Email"
        />
        <InputField
          placeholder="contact"
          name="contact" onChange={handleChange}
          classes={`${mainStyle.form_control} ${mainStyle.flex_25} ${mainStyle.input_margin}`}
          label="Contact"
        />
        <div
          className={`${mainStyle.form_control} ${mainStyle.flex_25} ${mainStyle.input_margin}`}>
          <label>Role</label>
          <select className={mainStyle.custom_select} name="role"
          onChange={handleChange}>
            <option className={mainStyle.custom_option} value="0">
              Select ---
            </option>
            <option className={mainStyle.custom_option} value="seller">
              Seller
            </option>
            <option className={mainStyle.custom_option} value="shipper">
              Shipper
            </option>

            <option className={mainStyle.custom_option} value="customer">
              Customer
            </option>
          </select>
        </div>
        <InputField
          placeholder="Country"
          name="country" onChange={handleChange}
          classes={`${mainStyle.form_control} ${mainStyle.flex_25} ${mainStyle.input_margin}`}
          label="Country"
        />
        <InputField
          placeholder="Enter postal code "
          name="postalCode" onChange={handleChange}
          classes={`${mainStyle.form_control} ${mainStyle.flex_25} ${mainStyle.input_margin}`}
          label="PostalCode"
        />
    
           <InputField
          placeholder="city" name="city"  label="City" onChange={handleChange}
          classes={`${mainStyle.form_control} ${mainStyle.input_margin}`}
         />
        <InputField
          placeholder="Address" name="address"  label="Address" onChange={handleChange}
          classes={`${mainStyle.form_control} ${mainStyle.flex_60}`}
         />
      </div>
<button className={mainStyle.save_btn} onClick={handleSubmit}>Save</button>
      <button className={mainStyle.save_btn}>Cancel</button>
    </div>
  );
};
export default CreateEditUsers;
