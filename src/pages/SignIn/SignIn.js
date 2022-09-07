import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Sign.module.css'
import { useState } from 'react'
import Navbar from '../../components/navbar/navbar';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };

      //   axios.post(API_URL,JSON.stringify(user)).then((response)=>{
      //           if (response.status !== 200) {
      //       throw new Error(response.statusText);
      //     }

      //     return response.json();
      // }).catch((error)=>{
      //     setMessage(err.toString());
      //     setStatus("error");
      // })

   
  };

  return (
    <div>
      <Navbar />
    <div className={styles.cont}>

      <div className={styles.SignIn}></div>
      <div className={styles.SignSide}></div>
      <div className={styles.Sign}>Sign In</div>
      <div className={styles.FormLabel3}>Email-ID</div>
      <input type="text" className={styles.In3} onChange={(e) => { setEmail(e.target.value) }}></input>
      <div className={styles.FormLabel4} >Password</div>
      <input type="password" className={styles.In4} onChange={(e) => { setPassword(e.target.value); }}></input>
      <div id='Eye'></div>
      
      <button className={styles.SignInB} ></button>
      <div className={styles.SignInT} onClick={handleSubmit}>Sign In</div>
      <div className={styles.Linksto}>New Here ? <Link to='/SignUp'>Sign Up</Link></div>
    </div>
    </div>
  )
}

export default SignIn