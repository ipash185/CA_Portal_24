import styles from './contact.module.css';
import {MdEmail,MdFacebook} from 'react-icons/md';
import {AiFillLinkedin} from 'react-icons/ai';

function Contact() {
      return (
        <div className={styles.cov}>
          <h1>CONTACT US</h1>
        <div className={styles.main}>
      <div className={styles.card}>
          <div className={styles.circle}></div>
          <div className={styles.name}>NAME OF PERSON</div>
          <div className={styles.job}>JOB Description</div>
          <div className={styles.icons}><MdEmail/>&nbsp;<MdFacebook/>&nbsp;<AiFillLinkedin/></div>
          <div className={styles.num}>NUMBER</div>
        </div>
        <div className={styles.card1}>
        <div className={styles.circle}></div>
          <div className={styles.name}>NAME OF PERSONdd</div>
          <div className={styles.job}>JOB Description</div>
          <div className={styles.icons}><MdEmail/>&nbsp;<MdFacebook/>&nbsp;<AiFillLinkedin/></div>
          <div className={styles.num}>NUMBER</div>
          </div>
        <div className={styles.card2}>
        <div className={styles.circle}></div>
          <div className={styles.name}>NAME OF PERSONdd</div>
          <div className={styles.job}>JOB Description</div>
          <div className={styles.icons}><MdEmail/>&nbsp;<MdFacebook/>&nbsp;<AiFillLinkedin/></div>
          <div className={styles.num}>NUMBER</div>
          </div>    
        <div className={styles.card}>
          <div className={styles.circle}></div>
          <div className={styles.name}>NAME OF PERSON</div>
          <div className={styles.job}>JOB Description</div>
          <div className={styles.icons}><MdEmail/>&nbsp;<MdFacebook/>&nbsp;<AiFillLinkedin/></div>
          <div className={styles.num}>NUMBER</div>
        </div>
        <div className={styles.card}>
          <div className={styles.circle}></div>
          <div className={styles.name}>NAME OF PERSON</div>
          <div className={styles.job}>JOB Description</div>
          <div className={styles.icons}><MdEmail/>&nbsp;<MdFacebook/>&nbsp;<AiFillLinkedin/></div>
          <div className={styles.num}>NUMBER</div>
        </div>
      </div>
      </div>
      );
}

export default Contact;