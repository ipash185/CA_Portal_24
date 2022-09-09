import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Sign.module.css'
import { useState } from 'react'
import { TailSpin } from 'react-loading-icons'
import axios from "axios"
import {Redirect } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/navbar/navbar';
import img1 from "../../images/homepage_img.svg"

import Alert from '@mui/material/Alert';


import useForm from './useForm'

const SignUp = (props) => {

  const [show,setShow] = useState(false)
  const [error,setError] = useState(false)
  const [loading,setLoading] = useState(false)

  let navigate = useNavigate();

  const formElement = useRef(null);

  const additionalData = {
    sent: new Date().toISOString(),
  };

  // const { handleSubmit, status, message,isShow } = useForm({
  //   form: formElement.current,
  //   additionalData
  // })

  const handleSubmit = (e) => {

      e.preventDefault();
     

     
      const data = Array.from(formElement.current)
        .filter((input) => input.name)
        .reduce(
          (obj, input) => Object.assign(obj, { [input.name]: input.value }),
          {}
        );

      if (additionalData) {
        Object.assign(data, additionalData);
      }

      console.log(data);

      setLoading(true);


      axios.post("https://cap-ktj-backend.herokuapp.com/signup", data).then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

         setLoading(false)
         setError(false)

         navigate('/home');

         console.log("Success")
         
        return response.json();
       
        
        

      }).catch((err) => {

        setLoading(false)

        setError(true)

        // navigate('/SignUp',{message:true})
        
        
       
      })


    
  };

  

  return (

    

    <form

      onSubmit={handleSubmit}
      target="_blank"
      ref={formElement}
    >
    
   
      <div>
        <Navbar />


        
        <div className={styles.cont}>

          
       

          <div className={styles.SignIn}></div>

         
          <div className={styles.SignSide}>
            <img src={img1} />
            <div className='SideDivT'><h1>CA Programme Registration</h1></div>
          </div>
          <div className={styles.Sign}>
            
     <div style={{display:"flex",columnGap:"50px",padding:"5px 0 "}} className={styles.Sign} >

   
            {false?( <h6 >Your are Registered Successfully </h6>
):"Register"}

{ error?( <h6 style={{color:"red"}} > Error in Registeration,Try Again</h6>):""}


</div>

            
            </div>




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
          <input type="text" required = "true" name="first_name" className={styles.In1}></input>
          <input type="text" required = "true" name="last_name" className={styles.In2}></input>
          <select name="gender" type="text" className={styles.PIn3}>
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
          <input type="number"  name="phone" className={styles.PIn4}></input>
          <input type="text" required = "true" name="email" className={styles.PIn5}></input>
          <input type="text" required = "true" name="college" className={styles.PIn6}></input>
          <input type="text" required = "true" name="city" className={styles.PIn7}></input>
          <input type="text" required = "true" name="state" className={styles.PIn8}></input>
          <input type="password" required = "true" name="password" className={styles.PIn9}></input>

         
          
          <button type="submit" onClick={()=>setShow(true)} style = {{color:"white",cursor:"pointer"}} className={styles.Button1}>
            
          {loading ? (
                        <span style={{ marginRight: '9px',marginTop:"5px" }}>
                          <TailSpin width='20' height='12' />
                        </span>
                      ) : (
                        ''
                      )}

             <span className='ButtonLabel'>Register</span>
            
            </button>
         

          

         
          {/* <div className={styles.Linksto}>Already a member?<Link to='/SignIn'>Sign In</Link></div> */}


        </div>
      </div>

    </form>

  )
}




export default SignUp