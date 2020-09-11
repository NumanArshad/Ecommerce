import React from "react"
import commonstyles from "../../../assets/css/common_styles.module.css"
import Modal from "../../../common/layouts/modal"
 
const CreateEditCategory = (props) => {
    return (


        <div className={ `${commonstyles.modal_content} ${commonstyles.body_container}` }>
            <div className={commonstyles.form_container}>
                <div className={`${commonstyles.form_control} ${commonstyles.flex_100}`}>
                    <label>Name</label>
                    <input type="text" placeholder="name" name="email"
                    />
                </div>
                <div className={`${commonstyles.form_control} ${commonstyles.flex_100}`}>
                    <label>Description</label>
                    <input type="text" placeholder="name" name="email"
                    />
                </div>

            </div>
            <button className={commonstyles.save_btn} >Save</button>
            <button className={commonstyles.save_btn} >Cancel</button></div>

    )
}
export default CreateEditCategory