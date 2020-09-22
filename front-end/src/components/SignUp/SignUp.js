import React, { useState } from "react";
import { register } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { roleRedirect } from "../../utils/manageRoles";
import style from "../../assets/css/login.module.scss";

const SignUp = () => {
  const [formData, handleData] = useState({
    email: "",
    password: "",
    role: ""
  });
  const { username, password, role } = formData;
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    isAuthenticated,
    user: { role: authRole }
  } = useSelector(state => state.authReducer);
  if (isAuthenticated) {
    roleRedirect(history, authRole);
  }

  const handleChange = e => {
      alert(e.target.name)
    const { name, value } = e.target;
    handleData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    //   alert(JSON.stringify(formData))
    dispatch(register(formData));
  };

  return (
    <div className={style.login_container}>
      <h1>register here</h1>

      <input
        type="text"
        placeholder="email"
        name="email"
        value={username}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="role"
        name="role"
        value={role}
        onChange={handleChange}
      />
      <button onClick={handleSubmit} className={style.login_btn}>
        Register
      </button>
    </div>
  );
};
export default SignUp;
