import React from 'react'
import styles from './Profile.module.css';

const ProfileEdit = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.ProfileDiv}></div>
      <div className={styles.ProfileSide}></div>
      <button className={styles.ButtonAvatar}></button>
      <div className={styles.ButtonText}>Change Avatar</div>
      <div className={styles.NameOf}>Name Of Candi</div>
      <div className={styles.HeadPro}>Profile</div>
      <button className={styles.EditProB}></button>
      <div className={styles.EditBText}>Edit</div>
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
      
    </div>
  )
}

export default ProfileEdit
