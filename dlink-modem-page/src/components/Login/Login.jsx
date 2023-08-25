import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";
import "./Login.scss";
import { useTranslation } from "react-i18next";
import "../../i18.js";

const Login = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const lng = navigator.language;

  return (
    <>
    
    <div id="bodyLogin">
      <img src={images.logo} alt="logo" className="dlink_logo"/>
      <div id="containerForm">
        <div id="leftForm">
          <h1 id="welcomeForm">{t('translations:welcome')}</h1>
         <p id="loremForm"> Supporto </p>
        </div>
        <form id="rightForm">
          <h1 id="login">LogIn</h1>
          <br />
          <input type="text" id="username" className="client-info" />
          <label for="username">{t("translations:username")}</label>
          <input type="password" id="password" className="client-info" />
          <label for="password">Password</label>
          <input
            type="submit"
            id="submit"
            className="client-info"
            value="Login"
          />
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
