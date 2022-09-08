import React from 'react'
import { MdEmail, MdFacebook } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import styles from './Card.module.css'

function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.circle}></div>
            <div className={styles.name}>NAME OF PERSON</div>
            <div className={styles.job}>JOB Description</div>
            <div className={styles.icons}><MdEmail />&nbsp;<MdFacebook />&nbsp;<AiFillLinkedin /></div>
            <div className={styles.num}>NUMBER</div>
        </div>
    )
}

export default Card