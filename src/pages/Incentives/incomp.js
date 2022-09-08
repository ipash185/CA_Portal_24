import styles from './incentive.module.css';

function Incomp(props){
    return(
        <div className={styles.elem}>
            <div className={styles.circle}></div>
            <p className={styles.para}><b style={{fontSize: '2rem'}}> {props.text}</b></p>
        </div>
    );
}

export default Incomp;