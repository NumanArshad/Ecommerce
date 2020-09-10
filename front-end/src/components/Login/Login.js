import React, { useState } from "react"
import { login } from "../../actions/auth"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import style from "../../assets/css/login.module.css"
import {useHistory} from "react-router-dom"
const Login = () => {
    const [formData, handleData] = useState({ email: "", password: "" })
    const { username, password } = formData
    const history=useHistory()
    const dispatch = useDispatch()
  const { isAuthenticated } = useSelector(state => state.authReducer)
    if (isAuthenticated) {
        return (<Redirect to="/dashboard" />)
    }



    const handleChange = e => {
        const { name, value } = e.target
        handleData({ ...formData, [name]: value })
    }
    const handleSubmit = () => {
        //   alert(JSON.stringify(formData))
        dispatch(login(formData))

    }
    return (
        <div className={style.login_container}>

            <h1>login here</h1>
            <label>Email</label>
            <input type="text" placeholder="email" name="email" value={username}
                onChange={e => handleChange(e)} />
                    <label>Password</label>
            <input type="text" placeholder="password" name="password" value={password}
                onChange={e => handleChange(e)} />
            <button className={style.login_btn} onClick={handleSubmit}>Login</button>
            <div className={style.frgt_container}>
                <a href="/" onClick={(e)=>{e.preventDefault()}}   className={style.forget_link}>Forget password</a>
                <a href="/"  onClick={(e)=>{e.preventDefault();history.push("/signup")}}  >Don't have account SignUp here</a>
            </div>

        </div>
    )
}
export default Login