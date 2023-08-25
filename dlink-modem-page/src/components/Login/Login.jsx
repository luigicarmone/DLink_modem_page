import React, { useState, useEffect } from 'react';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import './Login.scss';

const Login = () => {
  return (
    <>
    <img src={images.logo} alt='logo'></img>
  <div id="container">
    <div id="left">
        <h1 id="welcome">Benvenuto</h1>
         <p id="lorem">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
      Vivamus sodales eros non arcu pellentesque convallis.<br />
      Nunc dignissim lectus in malesuada porta.<br />
      Proin ac erat sed urna congue suscipit.<br />
      Morbi aliquet eget nisl id ornare.
      </p>
    </div>
  <div id="right">
    <h1 id="login">LogIn</h1><br />
    <input type="email" id="email" class="client-info" />
    <label for="email">Email</label>
    <input type="password" id="password" class="client-info" />
    <label for="password">Password</label>
    <input type="submit" id="submit" class="client-info" value="Submit" />
  </div>
</div>

 </>
  )
}

export default Login;