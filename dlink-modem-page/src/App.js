import React, { useEffect } from 'react'
import Login from './components/Login/Login.jsx';
import { useTranslation } from 'react-i18next';
import './i18.js';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])


  const lng = navigator.language

  return (
    <>
    <Login />
    </>
  );
}

export default App;