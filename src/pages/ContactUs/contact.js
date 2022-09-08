import React from 'react'
import styles from './contact.module.css';
import Card from './Card/Card';
import Aswini from '../../images/Aswini.jpeg'
import Kajal from '../../images/Kajal.jpeg'
import Rishita from '../../images/Rishita.jpeg'

function Contact() {
  return (
    <div className={styles.cov}>
      <h1>CONTACT US</h1>
      <div className={styles.main}>
          <Card img={Aswini} name="Ashwini Anand" job="Publicity Head, Design Coordinator" num="9660726893" email="anand.ashwini@ktj.in" fb = "https://www.facebook.com/ashwini.anand.716" li="https://www.linkedin.com/in/ashwini-anand-0b6668217"/>
          <Card img={Kajal} name="Kajal Singh" job="Publicity Head, Design Coordinator, Auto Expo Coordinator" num="8433450232" email="singh.kajal@ktj.in" fb = "https://www.facebook.com/profile.php?id=100016684572655	" li="https://www.linkedin.com/in/kajal-singh-164242213"/>
          <Card img={Rishita} name="Rishitha Marlapati" job="Publicity Head, Overseas coordinator" num="8850412529" email="rishitha.marlapati@ktj.in" fb = "https://www.facebook.com/rishitha.marlapati/" li="www.linkedin.com/in/rishitha-marlapati-a7096521b"/>
      </div>
    </div>
  );
}

export default Contact;