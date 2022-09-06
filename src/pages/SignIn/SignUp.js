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

    <div className={styles.cont}>

      <div className={styles.SignIn}></div>
      <div className={styles.SignSide}></div>
      <div className={styles.Sign}>Sign Up</div>
      <div className={styles.FormLabel1}>First Name</div>
      <div className={styles.FormLabel2}>Last Name</div>
      <input type="text" className={styles.In1}></input>
      <input type="text" className={styles.In2}></input>
      <div className={styles.PLabel}>
      <div className={styles.PLabel3}>Gender</div>
      <div className={styles.PLabel4}>MobileNumber</div>
      <div className={styles.PLabel5}>Email-ID</div>
      <div className={styles.PLabel6}>College Name</div>
      <div className={styles.PLabel7}>City</div>
      <div className={styles.PLabel8}>State</div>
      <div className={styles.PLabel9}>Password</div>
      </div>
      <select name="gender" type="text" className={styles.PIn3}>
      <option>Select</option>
        <option>Male</option>
        <option>Female</option>
        <option>Others</option>
      </select>
      <input type="text" className={styles.PIn4}></input>
      <input type="text" className={styles.PIn5}></input>
      <input type="text" className={styles.PIn6}></input>
      <input type="text" className={styles.PIn7}></input>
      <input type="text" className={styles.PIn8}></input>
      <input type="password" className={styles.PIn9}></input>
      <button className={styles.Button1}></button>
      <div className={styles.ButtonLabel}>Sign Up</div>
      <div className={styles.Linksto}>Already a member?<Link to='/SignIn'>Sign In</Link></div>


    </div>

  )
}

export default SignUp
