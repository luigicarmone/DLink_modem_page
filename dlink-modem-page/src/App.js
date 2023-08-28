import React, { useEffect } from 'react'
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
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
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;