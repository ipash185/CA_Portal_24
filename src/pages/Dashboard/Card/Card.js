import styles from './Card.module.css'

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.circle}>
                <img src={props.img} alt={props.name} height="100%" width="100%"></img>
            </div>
            
        </div>
    )
}

export default Card