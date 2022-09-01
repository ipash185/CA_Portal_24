import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Sign.module.css'

const SignUp = () => {
  return (
    
      <div>
       
        <div className={styles.SignIn}></div>
        <div className={styles.SignSide}></div>
        <div className={styles.Sign}>Sign Up</div>
        <div className={styles.FormLabel1}>First Name</div>
        <div className={styles.FormLabel2}>Last Name</div>
        <input type="text" className={styles.In1}></input>
        <input type="text" className={styles.In2}></input>
        <div className={styles.FormLabel3}>Email-ID</div>
        <input type="text" className={styles.In3}></input>
        <div className={styles.FormLabel4}>Password</div>
        <input type="password" className={styles.In4}></input>
        <div id={styles.Eye}></div>
        <div className={styles.FormLabel5}>College Name</div>
        <input type="text" className={styles.In5}></input>
        <button className={styles.Button1}></button>
        <div className={styles.ButtonLabel}>Sign Up</div>
        <div className={styles.Linksto}>Already a member ? <Link to='/SignIn'>Sign In</Link></div>
        
      
    </div>
   
  )
}

export default SignUp
