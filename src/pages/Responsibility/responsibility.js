import styles from './responsibility.module.css';


function Responsibility(){
    return(
            <div className={styles.cov}>
              <h1>RESONSIBILITIES</h1>
            <div className={styles.main}>
          <div className={styles.card}>
              <div className={styles.circle}></div>
              <p className={styles.para}>COORDINATION<br></br>
                    CAs arrange workshops and activities in their respective
                     colleges with the aid of KTJ. Thus, they serve as the 
                     liaison between KTJ and the respective college administrations.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.circle}></div>
              <p className={styles.para}>COLLEGE PUBLICITY<br/>
                A campus ambassador also helps in publicising KTJ, and 
                ensuring participation of the respective campus community</p>
            </div>
            <div className={styles.card}>
              <div className={styles.circle}></div>
              <p className={styles.para}>ON SOCIAL MEDIA<br/>
                CAs must also promote KTJ via the social media platform by utilizing
                 their social media network for the development of KTJ'23.</p>
            </div>
            </div>
            </div>
            );
}


export default Responsibility;