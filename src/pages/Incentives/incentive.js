import styles from './incentive.module.css';
import Incomp from './incomp';

function Incentives() {
    return (
        <div className={styles.cov}>
            <h1 className={styles.heading}>INCENTIVES</h1>
            <div className={styles.main}>
                <div className={styles.sub}><div className={styles.o}><Incomp text="Certificate of Appreciation signed by the Chairman, 
            Kshitij IIT Kharagpur and President, Gymkhana IIT Kharagpur after the successful completion of the tenure."/></div></div>
                <div className={styles.sub}><div className={styles.e}><Incomp text="Invitation to all the events conducted 
            by Kshitij IIT Kharagpur."/></div></div>
                <div className={styles.sub}><div className={styles.o}><Incomp text="Extensive networking with students of IIT 
            Kharagpur and students from various colleges."/></div></div>
                <div className={styles.sub}><div className={styles.e}><Incomp text="A special post will be released on Kshitij's 
            social media handles announcing the top 10 best campus ambassadors."/></div></div>
                <div className={styles.sub}><div className={styles.o}><Incomp text="Goodies and Hampers after the fest." /></div></div>
            </div>
        </div>
    );
}

export default Incentives;