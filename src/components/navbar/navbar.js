import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
         
             <img src="https://www.lawctopus.com/wp-content/uploads/2015/01/Kshitij_Logo.png" alt="" />
             <span>KSHITIJ</span>
        </div>

       
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/Incentives">Incentives</NavLink>
            </li>
            <li>
              <NavLink to="/Terms">Terms</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
             <button>
              <NavLink to="/Login">Login</NavLink>
             </button>
             <button className="sign">
              <NavLink to="/Signup">Signup</NavLink>
             </button>
             
          </ul>
        </div>

 
             
           
         <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
      </nav>
 
    </>
  );
};

export default Navbar;
