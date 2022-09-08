   import React, { useState } from "react";
import classes from "./navbar.module.css";
 import { GiHamburgerMenu } from "react-icons/gi";
import img1 from "../../images/homepage_img.svg"
import {GiWideArrowDunk} from "react-icons/gi"
import {Link} from 'react-router-dom';
 
 const Navbar = () => {
   
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>  
      < div className={classes.main_nav}>
       
        <div className={classes.logo}>
               
             <img src={img1} alt="" />
             <span>KSHITIJ</span>
        </div>

       
        <div
          className={
                  showMediaIcons ? `${classes.menu_link} ${classes.mobile_menu_link}` : `${classes.menu_link}`
          } >
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>  
              <a href = "#about">About Us</a>
            </li>
            <li> 
              <a href = "#resp">Responibilities</a>
            </li>
            <li> 
              <a href = "#inc">Incentives</a>
            </li>
            <li>
              <a href = "#testimonials">Testimonials</a>
            </li>
            <li>
              <a href = "#contact">Contact</a>
            </li>
             <li>
              <div className="button">
             
             
             {/* <button  
             className={classes.sign}>
              <Link to="/Signup">Signup</Link>
             </button>  */}
             {/* <button className={classes.login}>
              <div to="/Login">Sign In</div>
             </button> */}
              </div>
              </li> 
          </ul>
          </div>
   
         <div className={classes.hamburger_menu}>
            <a href="#" onClick={() =>setShowMediaIcons(!showMediaIcons)
              // humburger.classList.remove('GiHamburgerMenu');
              // humburger.classList.add('GiWideArrowDunk');
            }>
              <GiHamburgerMenu/>
            </a>
        </div>
      </div>
      </>

  );
        };
        export default Navbar;
