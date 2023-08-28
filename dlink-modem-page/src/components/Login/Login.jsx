import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import "./Login.scss";
import { useTranslation } from "react-i18next";
import "../../i18.js";
// import { validEmail, validPassword } from './Regex.jsx';

const Login = () => {
  // change language 
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const lng = navigator.language;

  // validation form
  
  const [formData, setFormData] = useState({
    username: '',
    // email: '',
    password: ''
    // confirmPassword: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData, [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.username.trim()) {
        validationErrors.username = t("translations:error_username");
    }

    // if(!formData.email.trim()) {
    //     validationErrors.email = "email is required"
    // } else if(!/\S+@\S+\.\S+/.test(formData.email)){
    //     validationErrors.email = "email is not valid"
    // }

    if(!formData.password.trim()) {
        validationErrors.password = t("translations:passwordEmpty");
    } else if(formData.password.length < 6){
        validationErrors.password = t("translations:passwordLength");
    }

    // if(formData.confirmPassword !== formData.password) {
    //     validationErrors.confirmPassword = "password not matched"
    // }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
    }

  }
  return (
    <>
    <div id="bodyLogin">
      <img src={images.logo} alt="logo" className="dlink_logo"/>
      <div id="containerForm">
        <div id="leftForm">
          <h1 id="welcomeForm">{t('translations:welcome')}</h1>
         <p id="loremForm"> Supporto </p>
        </div>
        <form id="rightForm" onSubmit={handleSubmit}>
          <h1 id="login">LogIn</h1>
          <br />
          <input type="text" id="username" className="client-info" name="username" onChange={handleChange}/>
          {errors.username && <span>{errors.username}</span>}  
          <label htmlFor="username">{t("translations:username")}</label>

          <input type="password" id="password" className="client-info" name="password" onChange={handleChange} />
          {errors.password && <span>{errors.password}</span>} 
          <label htmlFor="password">Password</label>

          <button type="submit" id="submit" className="client-info">Login</button>

          <Link to="/signup" className="client-info">Create Account </Link>
        </form>
      </div>
      <footer className="copyright_footer">
        <h1>COPYRIGHT © 2019 D-LINK</h1>
      </footer>
    </div>
    </>
  );
};

export default Login;
