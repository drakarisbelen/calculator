import React from 'react';
import  "../App.css";
import freeCodecampLogo from "../images/FreeCodeCamp_logo.png"

const Logo = () =>(
    <div className="freecodecamp-logo-container">
    <img src={freeCodecampLogo} className="freecodecamp-logo" alt="freecodecamp logo"/>
  </div>
);

export default Logo;