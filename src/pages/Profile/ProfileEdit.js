import React from 'react'
import styles from './Profile.module.css';
import Navbar from '../../components/navbar/navbar';

const ProfileEdit = () => {
  return (
    <div className={styles.cont}>
      <Navbar />
      <div className={styles.ProfileDiv}></div>
      <div className={styles.ProfileSide}></div>
      <button className={styles.ButtonAvatar}></button>
      
      <div className={styles.NameOf}>NAME OF CANDI</div>
      <div className={styles.HeadPro}>PROFILE</div>
      <button className={styles.EditProB}></button>
      <div className={styles.EditBText}>Edit</div>
      <div className={styles.PLabel}>
      <div className={styles.PLabel1}>FIRST NAME</div>
      <div className={styles.PLabel2}>LAST NAME</div>
      <div className={styles.PLabel3}>GENDER</div>
      <div className={styles.PLabel4}>MOBILE NUMBER</div>
      <div className={styles.PLabel5}>EMAIL-ID</div>
      <div className={styles.PLabel6}>COLLEGE NAME</div>
      <div className={styles.PLabel7}>CITY</div>
      <div className={styles.PLabel8}>STATE</div>
      <div className={styles.PLabel9}>PASSWORD</div>
      </div>
      <input type="text" className={styles.PIn1}></input>
      <input type="text" className={styles.PIn2}></input>
      <select name="gender" type="text" className={styles.PIn3}>
      <option>SELECT</option>
        <option>MALE</option>
        <option>FEMALE</option>
        <option>OTHERS</option>
      </select>
      <input type="text" className={styles.PIn4}></input>
      <input type="text" className={styles.PIn5}></input>
      <input type="text" className={styles.PIn6}></input>
      <input type="text" className={styles.PIn7}></input>
      <input type="text" className={styles.PIn8}></input>
      <input type="password" className={styles.PIn9}></input>
    </div>
  )
}

export default ProfileEdit
