import React from "react"
const InputField = ({ label, classes, type, placeholder, name }) => {
   
    console.log(label,classes,type,placeholder,name)
    return (
        <div className={classes}>
            <label>{label}</label> {type==="file" && <br />}
            <input type={type || "text"} placeholder={placeholder} name={name}
            />
        </div>
    )
}
export default InputField