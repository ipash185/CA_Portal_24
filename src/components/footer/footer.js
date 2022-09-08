import React from 'react'
import img1 from '../../images/homepage_img.svg';
import classes from "./footer.module.css";
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
//  import url();


function Footer() {
  return (
    <>
      <div className={classes.mainfoot}>
        <div className={classes.footup}>
          <div className={classes.footabout}>
            <div className={classes.logo}>
              <img src={img1} alt="" />
              <span>KSHITIJ</span>
            </div>
            <div className={classes.content}>
              <p>   Kshitij, IIT Kharagpur's annual techno-management symposium, has grown in popularity, celebrating the spirit of science and technology by bringing together students from all across India to demonstrate their scientific and managerial prowess.
                <br />
                We're renowned for putting on an eclectic mix of events, including synchronized workshops, technical displays, and guest talks by experts in the fields of technology and entrepreneurship. Students can assess their abilities and set greater goals than ever before thanks to events ranging from technology to management. </p>
            </div>
          </div>
          <div className={classes.form}>
            <form className={classes.forms} action="#" method="POST">
              <h2>For any queries and suggestions</h2>
              <input type="Name" name="Name" placeholder='Name' />
              <input type="email" name="email" placeholder='Email' />
              <input type="contact" name="contact" placeholder='Contact Number' />
              <textarea name="message" placeholder=' Write to Us ...' />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div
          iv className={classes.footdown}>
          <div className={classes.social}>
            <ul>
              <li>
                <a to="/" className='Bs'><BsFacebook /></a>
              </li>
              <li>
                <a to="/" className='Bs'><BsInstagram /></a>
              </li>
              <li>
                <a to="/" className='Bs'><BsTwitter /></a>
              </li>
              <li>
                <a to="/" className='Bs'><BsLinkedin /></a>
              </li>
              <li>
                <a to="/" className='Bs'><BsYoutube /></a>
              </li>
            </ul>
          </div>
          <div className={classes.copy}>
            <h3> <span>&copy;</span> KSHITIJ IIT KHARAGPUR. ALL RIGHTS RESERVED</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

