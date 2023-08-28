import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import "./Register.scss";
import { useTranslation } from "react-i18next";
import "../../i18.js";

const Register = () => {
  // change language 
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const lng = navigator.language;

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  // validation form
  const [formData, setFormData] = useState({
    username: '',
    // email: '',
    password: '',
    confirmPassword: ''
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

    if(formData.confirmPassword !== formData.password) {
        validationErrors.confirmPassword = t("translations:confirmPassword");
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
        setFormData({
          username: '',
          password: '',
          confirmPassword: ''
        });
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
          <h1 id="login">{t('translations:register')}</h1>
          <br />
          <input
            type="text"
            id="username"
            className={`client-info ${errors.username ? 'text_danger' : ''}`}
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={errors.username ? { color: 'red' } : {}}
            />
          <label htmlFor="username" className={errors.username ? 'text_danger' : ''} style={errors.username ? { color: 'red' } : {}}> 
          {errors.username ? errors.username : t("translations:username")} 
          </label>

          <input
            type="password"
            id="password"
            className={`client-info ${errors.password ? 'text_danger' : ''}`}
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={errors.password ? { color: 'red' } : {}}
          />
          <label htmlFor="password" className={errors.password ? 'text_danger' : ''} style={errors.password ? { color: 'red' } : {}}>
          {errors.password ? errors.password : "Password"}
          </label>

          <input
            type="password"
            id="password"
            className={`client-info ${errors.confirmPassword ? 'text_danger' : ''}`}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={errors.confirmPassword ? { color: 'red' } : {}}
          />
          <label htmlFor="confirmPassword" className={errors.confirmPassword ? 'text_danger' : ''} style={errors.confirmPassword ? { color: 'red' } : {}}>
          {errors.confirmPassword ? errors.confirmPassword : t("translations:confirmPassword2")}
          </label>

          <div className="language-select">
            <label htmlFor="language" className="language-label">{t("translations:selectLanguage")}</label>
              <select className="language-dropdown" id="language" onChange={handleLanguageChange} value={i18n.language}>
                <option value="en">{t("translations:english")}</option>
                <option value="it">{t("translations:italian")}</option>
              </select>
          </div>
          <button type="submit" id="submit" className="client-info">{t('translations:register')}</button>
          <Link to="/" id="submit2" className="client-info">Login</Link>
        </form>
      </div>
      <footer className="copyright_footer">
        <h1>COPYRIGHT © 2019 D-LINK</h1>
      </footer>
    </div>
    </>
  );
};

export default Register;