import React from 'react';
import styles from './Homepage.module.css';
import About from '../About/about';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignIn/SignUp';
import ProfileEdit from '../Profile/ProfileEdit';
import ProfileSave from '../Profile/ProfileSave';



function Home() {
    return(
        <div>
        <div className={styles.container}>
            <div className={styles.bg}>
                <div className = {styles.im}></div>
                <div className = {styles.vert}></div>
                <h1 className={styles.heading}>CAMPUS<br/>AMBASSADOR<br/>PROGRAM</h1>
            </div>
            <div className={styles.about}>
                <About/>
            </div>
            <div className={styles.SignUp}>
                <SignUp />
            </div>
            <div className={styles.SignIn}>
                <SignIn />
            </div>
            <div className={styles.ProfileE}>
                <ProfileEdit />
            </div>
            <div className={styles.ProfileS}>
                <ProfileSave />
            </div>
        </div>
        
     </div>
    );

}

export default Home;