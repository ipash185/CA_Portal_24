import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Sign.module.css'


const SignIn = () => {
  return (
    <div>
      
        <div className={styles.SignIn}></div>
        <div className={styles.SignSide}></div>
        <div className={styles.Sign}>Sign In</div>
        <div className={styles.FormLabel3}>Email-ID</div>
        <input type="text" className={styles.In3}></input>
        <div className={styles.FormLabel4}>Password</div>
        <input type="password" className={styles.In4}></input>
        <div id='Eye'></div>
        <div className={styles.ForgotPassword}>Forgot Password?</div>
        <input type="checkbox" className={styles.Remember} />
        <div className={styles.RememberMe}>Remember Me</div> 
        <button className={styles.SignInB}></button>
        <div className={styles.SignInT}>Sign In</div>
        <div className={styles.Linksto}>New Here ? <Link to='/SignUp'>Sign Up</Link></div>
    </div>
  )
}

export default SignIn