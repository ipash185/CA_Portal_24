import styles from './Incentives.module.css';
import sample from './sample.png';

function Incentives() {
    return(
        <div className={styles.container}>
           <div className={styles.heading}>
                <h1>INCENTIVES</h1>
           </div>
           <div className={styles.circlebox}> 
                <img src={sample} className={styles.circle1}></img>
                <div className={styles.text1}>
                    <h4>LOREN IPSUM</h4>
                    <h5>HDHDHDB <br />
                        DJEDKJEEKD <br />
                        DEDKEDDDEND <br />
                        DDBDN
                    </h5>
                </div>
                <img src={sample} className={styles.circle2}></img>
                <div className={styles.text2}>
                    <h4>LOREN IPSUM</h4>
                    <h5>HDHDHDB <br />
                        DJEDKJEEKD <br />
                        DEDKEDDDEND <br />
                        DDBDN
                    </h5>
                </div>
                <img src={sample} className={styles.circle3}></img>
                <div className={styles.text3}>
                    <h4>LOREN IPSUM</h4>
                    <h5>HDHDHDB <br />
                        DJEDKJEEKD <br />
                        DEDKEDDDEND <br />
                        DDBDN
                    </h5>
                </div>
                <img src={sample} className={styles.circle4}></img>
                <div className={styles.text4}>
                    <h4>LOREN IPSUM</h4>
                    <h5>HDHDHDB <br />
                        DJEDKJEEKD <br />
                        DEDKEDDDEND <br />
                        DDBDN
                    </h5>
                </div>
                <img src={sample} className={styles.circle5}></img>
                <div className={styles.text5}>
                    <h4>LOREN IPSUM</h4>
                    <h5>HDHDHDB <br />
                        DJEDKJEEKD <br />
                        DEDKEDDDEND <br />
                        DDBDN
                    </h5>
                </div>
            </div>
        </div>
    );  
}

export default Incentives