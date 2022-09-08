import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import styles from './Sign.module.css'
import { useState } from 'react'
import Navbar from '../../components/navbar/navbar';
import img1 from "../../images/homepage_img.svg"

import useForm from './useForm'
const SignUp = () => {

  const formElement = useRef(null);

  const additionalData = {
    sent: new Date().toISOString(),
  };

  const {handleSubmit,status,message} = useForm({
    form: formElement.current,
    additionalData
  })



  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const user = { first_name, last_name, email, password, college };
  //   console.log(user);
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(user)
  //   };
  //   fetch("http://", requestOptions)
  //     .then((res) => res.json())
  //     .then((data) => { console.log(data); })
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // };

  return (

    <form
      
      onSubmit = {handleSubmit}
      target= "_blank"
      ref = {formElement}
      >
<div>
  <Navbar />
    <div className={styles.cont}>

      <div className={styles.SignIn}></div>
      <div className={styles.SignSide}>
        <img src={img1} />
        <div className='SideDivT'><h1>CA Programme Registration</h1></div>
      </div>
      <div className={styles.Sign}>Sign Up</div>
      
      
      <div className={styles.PLabel}>
      <div className={styles.FormLabel1}>First Name</div>
      <div className={styles.FormLabel2}>Last Name</div>
      <div className={styles.PLabel3}>Gender</div>
      <div className={styles.PLabel4}>MobileNumber</div>
      <div className={styles.PLabel5}>Email-ID</div>
      <div className={styles.PLabel6}>College Name</div>
      <div className={styles.PLabel7}>City</div>
      <div className={styles.PLabel8}>State</div>
      <div className={styles.PLabel9}>Password</div>
      </div>
      <input type="text"  name = "first_name" className={styles.In1}></input>
      <input type="text" name = "last_name" className={styles.In2}></input>
      <select name="gender" type="text" className={styles.PIn3}>
      <option>Select</option>
        <option>Male</option>
        <option>Female</option>
        <option>Others</option>
      </select>
      <input type="text"  name = "phone" className={styles.PIn4}></input>
      <input type="text" name = "email" className={styles.PIn5}></input>
      <input type="text" name = "college" className={styles.PIn6}></input>
      <input type="text" name= "city" className={styles.PIn7}></input>
      <input type="text" name = "state" className={styles.PIn8}></input>
      <input type="password" name = "passsword" className={styles.PIn9}></input>
      <button type = "submit" className={styles.Button1}></button>
      <div className={styles.ButtonLabel}>Sign Up</div>
      <div className={styles.Linksto}>Already a member?<Link to='/SignIn'>Sign In</Link></div>


    </div>
    </div>

    </form>

  )
}




export default SignUp
