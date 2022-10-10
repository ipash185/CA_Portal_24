import styles from './Card.module.css'

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.circle}>
                <img className={styles.ImgB} src={props.img} alt={props.name} height="100%" width="100%"></img>
                <div className={styles.Overlap}>
                <h1 className={styles.Head}>{props.Heading}</h1>
                <div className={styles.Icons}>
              <img className={styles.Image} src={props.img1} />
              <img className={styles.Image} src={props.img2} />
              <img className={styles.Image} src={props.img3} />
              <img className={styles.Image} src={props.img4} />
              <img className={styles.Image} src={props.img5} />
            </div>
            </div>
            </div>
            
        </div>
    )
}

export default Card