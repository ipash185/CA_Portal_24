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
    </div>
  )
}

export default ProfileEdit
