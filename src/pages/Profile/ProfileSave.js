import React from 'react';
import styles from './Profile.module.css';

const ProfileSave = () => {
  return (
    <div className={styles.cont}>
       <div className={styles.ProfileDiv}></div>
       <div className={styles.ProfileSide}></div>
      <button className={styles.ButtonAvatar}></button>
      
      <div className={styles.NameOf}>Name Of Candi</div>
      <div className={styles.HeadPro}>Profile</div>
      <button className={styles.EditProB}></button>
      <div className={styles.EditBText}>Save</div>
      <div className={styles.PLabel}>
      <div className={styles.PLabel1}>First Name</div>
      <div className={styles.PLabel2}>Last Name</div>
      <div className={styles.PLabel3}>Gender</div>
      <div className={styles.PLabel4}>MobileNumber</div>
      <div className={styles.PLabel5}>Email-ID</div>
      <div className={styles.PLabel6}>College Name</div>
      <div className={styles.PLabel7}>City</div>
      <div className={styles.PLabel8}>State</div>
      <div className={styles.PLabel9}>Password</div>
      </div>
      <input type="text" className={styles.PIn1}></input>
      <input type="text" className={styles.PIn2}></input>
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
    </div>
  )
}

export default ProfileSave
