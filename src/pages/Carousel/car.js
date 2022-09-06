import styles from './car.module.css';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import ArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';



function CarouselComponent(){

    return (
      <div className={styles.main}>
        <h1 className={styles.heading}>TESTIMONIALS</h1>
        <Carousel className={styles.cara}
          NextIcon={<ArrowForwardIosTwoToneIcon/>}
          PrevIcon={<ArrowBackIosTwoToneIcon/>}
          autoPlay={false}
          animation={"slide"}
          navButtonsAlwaysVisible={true}
          navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
                backgroundColor: 'transparent',
                color: 'black',
                transform: 'scale(2)',
                borderRadius: 0
            }
          }}
          >
                <div className={styles.elem}>
                  <div className={styles.box}></div>
                  <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a cursus velit, 
                    sed posuere diam. Duis non lacus eget odio malesuada sollicitudin. In consequat 
                    sem id elit lacinia, ac imperdiet mi semper. Vestibulum ac diam luctus, venenatis
                     nunc vitae, ornare quam. Vestibulum tincidunt iaculis  </p>
                </div>
                <div className={styles.elem}>
                <div className={styles.box}></div>
                  <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a cursus velit, 
                    sed posuere diam. Duis non lacus eget odio malesuada sollicitudin. In consequat 
                    sem id elit lacinia, ac imperdiet mi semper. Vestibulum ac diam luctus, venenatis
                     nunc vitae, ornare quam. Vestibulum tincidunt iaculis  </p>
                </div>
                <div className={styles.elem}>
                <div className={styles.box}></div>
                  <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a cursus velit, 
                    sed posuere diam. Duis non lacus eget odio malesuada sollicitudin. In consequat 
                    sem id elit lacinia, ac imperdiet mi semper. Vestibulum ac diam luctus, venenatis
                     nunc vitae, ornare quam. Vestibulum tincidunt iaculis  </p>
                </div>
        </Carousel>
        </div>
    )
}

export default CarouselComponent;  