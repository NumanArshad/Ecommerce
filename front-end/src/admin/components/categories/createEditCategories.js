import React, { useState } from "react"
import { useDispatch } from "react-redux"
import commonstyles from "../../../assets/css/common_styles.module.css"

import InputField from "../../../common/layouts/inputField"
import {newCategory} from "../../actions/categoryActions"
const CreateEditCategory = (props) => {
    const [category,setCategory]=useState({name:"",description:""})
    const dispatch=useDispatch()
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setCategory({...category,[name]:value})
    }
    const handleSubmit=()=>{
dispatch(newCategory(category))
    }
    return (
 

        <div className={ `${commonstyles.modal_content} ${commonstyles.body_container}` }>
            <div className={commonstyles.form_container}>
                 <InputField label="Name" classes={`${commonstyles.form_control} ${commonstyles.flex_100}`}
                placeholder="name" name="name" onChange={handleChange}/>
                <InputField label="Description" classes={`${commonstyles.form_control} ${commonstyles.flex_100}`}
                placeholder="Description" name="description" onChange={handleChange}/>
           </div>
            <button className={commonstyles.save_btn} onClick={handleSubmit} >Save</button>
            <button className={commonstyles.save_btn} >Cancel</button></div>

    )
}
export default CreateEditCategory