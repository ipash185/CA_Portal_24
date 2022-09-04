import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Sign.module.css'
import { useState } from 'react'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    console.log(user);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    };
    fetch("http://127.0.0.1:5000/signin", requestOptions)
      .then((res) => res.json())
      .then((data) => { console.log(data); localStorage.setItem('token', data.token); })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return (
    <div className={styles.cont}>

      <div className={styles.SignIn}></div>
      <div className={styles.SignSide}></div>
      <div className={styles.Sign}>Sign In</div>
      <div className={styles.FormLabel3}>Email-ID</div>
      <input type="text" className={styles.In3} onChange={(e) => { setEmail(e.target.value) }}></input>
      <div className={styles.FormLabel4} >Password</div>
      <input type="password" className={styles.In4} onChange={(e) => { setPassword(e.target.value); }}></input>
      <div id='Eye'></div>
      <div className={styles.ForgotPassword}>Forgot Password?</div>
      <input type="checkbox" className={styles.Remember} />
      <div className={styles.RememberMe}>Remember Me</div>
      <button className={styles.SignInB} ></button>
      <div className={styles.SignInT} onClick={handleSubmit}>Sign In</div>
      <div className={styles.Linksto}>New Here ? <Link to='/SignUp'>Sign Up</Link></div>
    </div>
  )
}

export default SignIn