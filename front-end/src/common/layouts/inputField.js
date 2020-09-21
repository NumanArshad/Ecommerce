import React from "react";
const InputField = ({ label, classes,...rest }) => {
  //pretent default show and have value for not show
  return (
    // <div className={classes}>j
    //     <label>{label}</label> {type==="file" && <br />}
    //     <input type={type || "text"} placeholder={placeholder} name={name} {...rest}
    //     />
    // </div>
    <div class={classes ?? "col-md-4 mb-3"} >
       <div class="input-group">
     <div class="input-group-prepend">
          <span class="input-group-text" id="validationTooltipUsernamePrepend">
            {label}
          </span>
        </div> 
        <input
          class="form-control"
          id="validationTooltipUsername"
          aria-describedby="validationTooltipUsernamePrepend"
          {...rest}
          
        />
        <div class="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
    </div>
  );
};
export default InputField;
