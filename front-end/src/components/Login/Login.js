import React, { useState } from "react"
import {login} from "../../actions/auth"
import { useDispatch,useSelector } from "react-redux"
import { Redirect } from "react-router"
const Login=()=>{
    const [formData,handleData]=useState({email:"",password:""})
    const {username,password}=formData
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
        dispatch(login(formData))

    }
    return(
    <>    
    <h1>login here</h1>
    <div style={{display:"inline-block"}}>
   <input type="text" placeholder="email" name="email" value={username}
        onChange={e=>handleChange(e)} />
        <input type="text" placeholder="password" name="password" value={password} 
        onChange={e=>handleChange(e)} />
       <button onClick={handleSubmit}>Login</button>
        </div></>
)
}
export default Login