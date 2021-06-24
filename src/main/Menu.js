
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
/* import { ReactComponent as Logo } from "../assets/logo.svg"; */

import "./menu.css";

import DarkMode from "../components/ModoDark";



const Menu = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
 
  return (
    <div className="header">
      <div className="logo-nav">
        
        <div className="logo-container">
          <DarkMode />
        </div>
        
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/">HOME</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/About">ABOUT</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/Contact">CONTACTO</Link>
          </li>
          
        </ul>
        
        

      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>

      

    </div>





  );
};



export default Menu;