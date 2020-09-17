import React from "react"
import mainStyle from "../../../assets/css/common_styles.module.css"
import InputField from "../../../common/layouts/inputField"
const New = () => {
    return (

  <div className={mainStyle.body_container}>
            <div className={mainStyle.form_container}>
                <div className={`${mainStyle.form_control} ${mainStyle.input_margin}`}>
                    <label>FirstName</label>
                    <input type="text" placeholder="name" name="email"
                    />


                </div>
                <div className={`${mainStyle.form_control} ${mainStyle.input_margin}`}>
                    <label>LastName</label>
                    <input type="text" placeholder="name" name="email"
                    />


                </div>
                <div className={mainStyle.form_control}>
                    <label>Email</label>
                    <input type="text" placeholder="name" name="email"
                    />

                </div>
                
                <div className={`${mainStyle.form_control} ${mainStyle.flex_25} ${mainStyle.input_margin}`}>
                    <label>Contact</label>
                    <input type="text" placeholder="name" name="email"
                    />
                </div>
                <div className={`${mainStyle.form_control} ${mainStyle.flex_25} ${mainStyle.input_margin}`}>
                   
                     <label>Role</label>
                    <select className={mainStyle.custom_select}>
                        <option className={mainStyle.custom_option} value="0">Select ---</option>
                        <option  className={mainStyle.custom_option}  value="0">Seller</option>
                        <option className={mainStyle.custom_option}  value="0">Shipper</option>

                        <option className={mainStyle.custom_option}  value="0">Customer</option>

                    </select>

                </div>
                <div className={`${mainStyle.form_control} ${mainStyle.flex_25} ${mainStyle.input_margin}`}>
                    <label>Country</label>
                    <input type="text" placeholder="name" name="email"
                    />
                </div>
                <div className={`${mainStyle.form_control} ${mainStyle.flex_25}`}>
                    <label>Postal Code</label>
                    <input type="text" placeholder="name" name="email"
                    />
                </div>
                <div className={`${mainStyle.form_control} ${mainStyle.input_margin}`}>
                    <label>City</label>
                    <input type="text" placeholder="name" name="email"
                    />
                </div>
                <div className={`${mainStyle.form_control} ${mainStyle.flex_60}`}>
                    <label>Address</label>
                    <input type="text" placeholder="name" name="email"
                    />


                </div>

            </div>

            <button className={mainStyle.save_btn} >Save</button>
            <button className={mainStyle.save_btn} >Cancel</button>

        </div>
    )
}
export default New