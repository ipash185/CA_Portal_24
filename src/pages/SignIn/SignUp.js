import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Sign.module.css'
import { useState } from 'react'
const SignUp = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [college, setCollege] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { first_name, last_name, email, password, college };
    console.log(user);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    };
    fetch("http://", requestOptions)
      .then((res) => res.json())
      .then((data) => { console.log(data); })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

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
      <div className={styles.Linksto}>Already a member?<Link to='/SignIn'>Sign In</Link></div>


    </div>

  )
}

export default SignUp
