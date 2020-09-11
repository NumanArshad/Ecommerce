import React from "react"

// import mainStyle from "../../../assets/css/products.module.css"
import mainStyle from "../../../assets/css/common_styles.module.css"
const New = () => {
    return (

        <div className={mainStyle.body_container}>
            <div className={mainStyle.form_container}>
                <div className={`${mainStyle.form_control} ${mainStyle.input_margin}`}>
                    <label>Name</label>
                    <input type="text" placeholder="name" name="email"
                    />
                </div>
                <div className={`${mainStyle.form_control}  ${mainStyle.input_margin}`}>
                    {/* <label>Role</label>
                    <input type="text" placeholder="name" name="email"
                    /> */}
                    <label>Category</label>
                    <select className={mainStyle.custom_select}>
                        <option className={mainStyle.custom_option} value="0">Select ---</option>
                        <option className={mainStyle.custom_option} value="0">Seller</option>
                        <option className={mainStyle.custom_option} value="0">Shipper</option>
                        <option className={mainStyle.custom_option} value="0">Customer</option>
                    </select>
                </div>
                <div className={`${mainStyle.form_control} ${mainStyle.flex_40} ${mainStyle.input_margin} `}>
                    <label>Quantity</label>
                    <input type="text" placeholder="name" name="email"
                    />
                </div>
                <div className={`${mainStyle.form_control} ${mainStyle.flex_40}`}>
                    <label>Price</label>
                    <input type="text" placeholder="name" name="email"
                    />
                </div>
              
                <div className={`${mainStyle.form_control}`}>
                    <label>Product Image</label><br />
                    <input type="file" placeholder="name" name="email"
                    />


                </div>

            </div>

            <button className={mainStyle.save_btn} >Save</button>
            <button className={mainStyle.save_btn} >Cancel</button>

        </div>

    )
}
export default New