import React, { useState } from "react"
import {register} from "../../actions/auth"
import { useDispatch,useSelector } from "react-redux"
import { Redirect } from "react-router"

const SignUp=()=>{
    const [formData,handleData]=useState({email:"",password:"",role:""})
    const {username,password,role}=formData
    const dispatch=useDispatch()
    const {isAuthenticated}=useSelector(state=>state.authReducer)

    if(isAuthenticated){
        return (<Redirect to="/dashboard" />)
    }


    const handleChange=e=>{
        const {name,value}=e.target
        handleData({...formData,[name]:value})
    }
    const handleSubmit=()=>{
     //   alert(JSON.stringify(formData))
        dispatch(register(formData))

    }
    return(
    <>    
    <h1>register here</h1>
    <div style={{display:"inline-block"}}>
   <input type="text" placeholder="email" name="email" value={username}
        onChange={e=>handleChange(e)} />
        <input type="text" placeholder="password" name="password" value={password} 
        onChange={e=>handleChange(e)} />
         <input type="text" placeholder="role" name="role" value={role} 
        onChange={e=>handleChange(e)} />
       <button onClick={handleSubmit}>Register</button>
        </div></>
)
}
export default SignUp