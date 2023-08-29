import React, { useEffect } from 'react'
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx';
import Status from './components/Status/Status.jsx';
import { useTranslation } from 'react-i18next';
import './i18.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])


  const lng = navigator.language

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Register />}></Route>
        <Route path='/status' element={<Status />}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;