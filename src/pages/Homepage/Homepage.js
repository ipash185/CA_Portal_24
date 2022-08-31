import React from 'react';
import styles from './Homepage.module.css';
import About from '../About/about';

function Home() {
    return(
        <div className={styles.container}>
            <div className={styles.bg}>
                <div className = {styles.im}></div>
                <div className = {styles.vert}></div>
                <h1 className={styles.heading}>CAMPUS<br/>AMBASSADOR<br/>PROGRAM</h1>
            </div>
            <div className={styles.about}>
                <About/>
            </div>
        </div>
    );

}

export default Home;