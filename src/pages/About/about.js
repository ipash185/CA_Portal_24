import styles from './about.module.css';

function About() {
    return(
        <div className={styles.main}>
            <h1>ABOUT US</h1>
            <div className={styles.box}>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a cursus velit, sed posuere diam. 
                Duis non lacus eget odio malesuada sollicitudin. In consequat sem id elit lacinia, ac imperdiet 
                mi semper. Vestibulum ac diam luctus, venenatis nunc vitae, ornare quam. Vestibulum tincidunt iaculis  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a cursus velit, sed posuere diam. Duis non lacus
                 eget odio malesuada sollicitudin. In consequat sem id elit lacinia, ac imperdiet mi semper. Vestibulum ac diam 
                 luctus, venenatis nunc vitae, ornare quam. Vestibulum tincidunt iaculis  Lorem ipsum dolor sit amet, consectetur 
                 adipiscing elit. Nunc a cursus velit, sed posuere diam. Duis non lacus eget oudin. In consequat sem id elit lacinia, 
                 ac imperdiet mi semper. Vestibulum ac diam luctus
                </p>
            </div>
        </div>
    );
}

export default About