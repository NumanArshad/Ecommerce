import React from "react"

import style from "../../../assets/css/products.module.css"
import mainStyle from "../../../assets/css/common_styles.module.css"
const CreateEditProduct=()=>{
    return( <div className={mainStyle.main}>
      
        <div className={style.body_container}>
            <div className={style.form_container}>
                <div className={style.form_control}>
                    <label>Name</label>
                    <input type="text" placeholder="name" name="email"
                    />
                  
                </div>
                <div className={`${style.form_control} ${style.grow}`}>
                    <label>Category</label>
                    <input type="text" placeholder="name" name="email"
                    />
                     
                </div>
                <div className={style.form_control}>
                    <label>Quantity</label>
                    <input type="text" placeholder="name" name="email"
                    />
                        </div>
                
            </div>

            <button className={style.save_btn} >Save</button>
            <button className={style.save_btn} >Cancel</button>
           
</div>

    </div>)
}
export default CreateEditProduct