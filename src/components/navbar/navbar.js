import React, { useState } from "react";
import classes from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import img1 from "../../images/icon2.png"
import {Link} from 'react-router-dom';
 
 const Navbar = (props) => {
   
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
              <a href="/" onClick={()=>setShowMediaIcons(false)}>Home</a>
            </li>
            <li>  
              <a href = "#about" onClick={()=>setShowMediaIcons(false)}>About Us</a>
            </li>
            <li> 
              <a href = "#resp" onClick={()=>setShowMediaIcons(false)}>Responibilities</a>
            </li>
            <li> 
              <a href = "#inc" onClick={()=>setShowMediaIcons(false)}>Incentives</a>
            </li>
            <li>
              <a href = "#testimonials" onClick={()=>setShowMediaIcons(false)}>Testimonials</a>
            </li>
            <li>
              <a href = "#contact" onClick={()=>setShowMediaIcons(false)}>Contact</a>
            </li>
             <li>
              <div className="button">
             
             
             {!props.show?(<><button  
             className={classes.sign}>
              <Link to="/Signup">Sign Up</Link>
             </button>  
              <button className={classes.sign}>
              <div to="/Login">Sign In</div>
             </button></>):""
             
             }

              </div>
              </li> 
          </ul>
          </div>
   
         <div className={classes.hamburger_menu}>
            <a onClick={() =>setShowMediaIcons(!showMediaIcons)
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
