import React from 'react'
import styles from './contact.module.css';
import Card from './Card/Card';

function Contact() {
  return (
    <div className={styles.cov}>
      <h1>CONTACT US</h1>
      <div className={styles.main}>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </div>
  );
}

export default Contact;