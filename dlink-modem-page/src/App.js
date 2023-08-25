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
    <h2>
    {t('translations:hello_world')}
    </h2>
    <span>browser language: {lng}</span>
    </>
  );
}

export default App;
