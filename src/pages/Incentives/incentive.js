import styles from './incentives.module.css';
import Incomp from './incomp';

function Incentives(){
    return(
        <div>
        <h1 className={styles.heading}>INCENTIVES</h1>
        <div className={styles.main}>
            <div className={styles.sub}><div className={styles.o}><Incomp/></div></div>
            <div className={styles.sub}><div className={styles.e}><Incomp/></div></div>
            <div className={styles.sub}><div className={styles.o}><Incomp/></div></div>
            <div className={styles.sub}><div className={styles.e}><Incomp/></div></div>
            <div className={styles.sub}><div className={styles.o}><Incomp/></div></div>
        </div>
        </div>
    );
}

export default Incentives;