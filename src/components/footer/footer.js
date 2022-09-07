import {FaFacebook,FaLinkedin,FaInstagramSquare,FaTwitter,FaYoutube} from 'react-icons/fa';
import styles from './footer.module.css';

function Footer(){
    return(
        <div className={styles.main}>
            <div className={styles.icon}><FaFacebook/></div>
            <div className={styles.icon}><FaInstagramSquare/></div>
            <div className={styles.icon}><FaLinkedin/></div>
            <div className={styles.icon}><FaTwitter/></div>
            <div className={styles.icon}><FaYoutube/></div>
        </div>
    );
}

export default Footer;