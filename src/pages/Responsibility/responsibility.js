import styles from './responsibility.module.css';


function Responsibility() {
  return (
    <div className={styles.cov}>
      <h1>RESONSIBILITIES</h1>
      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.circle}></div>
          <p className={styles.para}><div className={styles.pos}>1</div><br/>
            To act as a bridge between Kshitij, IIT Kharagpur and your respective college.</p>
        </div>
        <div className={styles.card}>
          <div className={styles.circle}></div>
          <p className={styles.para}><div className={styles.pos}>2</div><br />
            Publicising Kshitij in your respective colleges by circulating posters, mails or messages in the official college groups.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.circle}></div>
          <p className={styles.para}><div className={styles.pos}>3</div><br />
            Help conduct the Kshitij’s regional event Kascade in their respective hometowns.</p>
        </div>
        <div className={styles.card}>
          <div className={styles.circle}></div>
          <p className={styles.para}><div className={styles.pos}>4</div><br />
            Ensuring participation from your respective colleges for various events conducted by Kshitij.</p>
        </div>
      </div>
    </div>
  );
}


export default Responsibility;