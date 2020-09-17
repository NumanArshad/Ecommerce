import React from "react"
import InputField from "../../../common/layouts/inputField"
// import mainStyle from "../../../assets/css/products.module.css"
import mainStyle from "../../../assets/css/common_styles.module.css"
const CreateEditProduct = () => {
    return (   <div className={mainStyle.body_container}>
        <div className={mainStyle.form_container}>
            <InputField label="Name" classes={`${mainStyle.form_control} ${mainStyle.input_margin}`} placeholder="enter name" name="name" />
            <div className={`${mainStyle.form_control}  ${mainStyle.input_margin}`}>
                <label>Category</label>
                <select className={mainStyle.custom_select}>
                    <option className={mainStyle.custom_option} value="0">Select ---</option>
                    <option className={mainStyle.custom_option} value="0">Seller</option>
                    <option className={mainStyle.custom_option} value="0">Shipper</option>
                    <option className={mainStyle.custom_option} value="0">Customer</option>
                </select>
            </div>
            <InputField label="Quantity" classes={`${mainStyle.form_control} ${mainStyle.flex_40} ${mainStyle.input_margin}`} placeholder="enter quantity" name="qty" />
            <InputField label="Price" classes={`${mainStyle.form_control} ${mainStyle.flex_40}`} placeholder="enter price" name="price" />
            <InputField label="Product Image" classes={`${mainStyle.form_control}`} type="file" name="img" />
        </div>
        <button className={mainStyle.save_btn} >Save</button>
        <button className={mainStyle.save_btn} >Cancel</button>
    </div>

        // <div className={mainStyle.body_container}>
        //     <div className={mainStyle.form_container}>
        //         <div className={`${mainStyle.form_control} ${mainStyle.input_margin}`}>
        //             <label>FirstName</label>
        //             <input type="text" placeholder="name" name="email"
        //             />


        //         </div>
        //         <div className={`${mainStyle.form_control} ${mainStyle.input_margin}`}>
        //             <label>LastName</label>
        //             <input type="text" placeholder="name" name="email"
        //             />


        //         </div>
        //         <div className={mainStyle.form_control}>
        //             <label>Email</label>
        //             <input type="text" placeholder="name" name="email"
        //             />

        //         </div>
                
        //         <div className={`${mainStyle.form_control} ${mainStyle.flex_25} ${mainStyle.input_margin}`}>
        //             <label>Contact</label>
        //             <input type="text" placeholder="name" name="email"
        //             />
        //         </div>
        //         <div className={`${mainStyle.form_control} ${mainStyle.flex_25} ${mainStyle.input_margin}`}>
                   
        //              <label>Role</label>
        //             <select className={mainStyle.custom_select}>
        //                 <option className={mainStyle.custom_option} value="0">Select ---</option>
        //                 <option  className={mainStyle.custom_option}  value="0">Seller</option>
        //                 <option className={mainStyle.custom_option}  value="0">Shipper</option>

        //                 <option className={mainStyle.custom_option}  value="0">Customer</option>

        //             </select>

        //         </div>
        //         <div className={`${mainStyle.form_control} ${mainStyle.flex_25} ${mainStyle.input_margin}`}>
        //             <label>Country</label>
        //             <input type="text" placeholder="name" name="email"
        //             />
        //         </div>
        //         <div className={`${mainStyle.form_control} ${mainStyle.flex_25}`}>
        //             <label>Postal Code</label>
        //             <input type="text" placeholder="name" name="email"
        //             />
        //         </div>
        //         <div className={`${mainStyle.form_control} ${mainStyle.input_margin}`}>
        //             <label>City</label>
        //             <input type="text" placeholder="name" name="email"
        //             />
        //         </div>
        //         <div className={`${mainStyle.form_control} ${mainStyle.flex_60}`}>
        //             <label>Address</label>
        //             <input type="text" placeholder="name" name="email"
        //             />


        //         </div>

        //     </div>

        //     <button className={mainStyle.save_btn} >Save</button>
        //     <button className={mainStyle.save_btn} >Cancel</button>

        // </div>

  )
}
export default CreateEditProduct




// <div className={mainStyle.body_container}>
// <div className={mainStyle.form_container}>
//     <div className={`${mainStyle.form_control} ${mainStyle.input_margin}`}>
//         <label>FirstName</label>
//         <input type="text" placeholder="name" name="email"
//         />


//     </div>
//     <div className={`${mainStyle.form_control} ${mainStyle.input_margin}`}>
//         <label>LastName</label>
//         <input type="text" placeholder="name" name="email"
//         />


//     </div>
//     <div className={mainStyle.form_control}>
//         <label>Email</label>
//         <input type="text" placeholder="name" name="email"
//         />

//     </div>
    
//     <div className={`${mainStyle.form_control} ${mainStyle.flex_25} ${mainStyle.input_margin}`}>
//         <label>Contact</label>
//         <input type="text" placeholder="name" name="email"
//         />
//     </div>
//     <div className={`${mainStyle.form_control} ${mainStyle.flex_25} ${mainStyle.input_margin}`}>
       
//          <label>Role</label>
//         <select className={mainStyle.custom_select}>
//             <option className={mainStyle.custom_option} value="0">Select ---</option>
//             <option  className={mainStyle.custom_option}  value="0">Seller</option>
//             <option className={mainStyle.custom_option}  value="0">Shipper</option>

//             <option className={mainStyle.custom_option}  value="0">Customer</option>

//         </select>

//     </div>
//     <div className={`${mainStyle.form_control} ${mainStyle.flex_25} ${mainStyle.input_margin}`}>
//         <label>Country</label>
//         <input type="text" placeholder="name" name="email"
//         />
//     </div>
//     <div className={`${mainStyle.form_control} ${mainStyle.flex_25}`}>
//         <label>Postal Code</label>
//         <input type="text" placeholder="name" name="email"
//         />
//     </div>
//     <div className={`${mainStyle.form_control} ${mainStyle.input_margin}`}>
//         <label>City</label>
//         <input type="text" placeholder="name" name="email"
//         />
//     </div>
//     <div className={`${mainStyle.form_control} ${mainStyle.flex_60}`}>
//         <label>Address</label>
//         <input type="text" placeholder="name" name="email"
//         />


//     </div>

// </div>

// <button className={mainStyle.save_btn} >Save</button>
// <button className={mainStyle.save_btn} >Cancel</button>

// </div>