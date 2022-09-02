import React from "react";
import {Carousel} from "antd";
import styles from './car.module.css';
import 'antd/dist/antd.css';

function CarouselComponent() {
    return (
        <div className={styles.main}>
            <h1>TESTIMONIALS</h1>
            <Carousel>
                <div>
                  <div className={styles.elem}>
                    <div className={styles.box}></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a cursus velit
                       ,sed posuere diam. Duis non lacus eget odio malesuada sollicitudin. In consequat
                        sem id elit lacinia, ac imperdiet mi semper. Vestibulum ac diam luctus, venenatis
                         nunc vitae, ornare quam. Vestibulum tincidunt iaculis
                    </p>  
                    </div>
                </div>
                <div>
                  <div className={styles.elem}>
                    <div className={styles.box}></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a cursus velit
                       ,sed posuere diam. Duis non lacus eget odio malesuada sollicitudin. In consequat
                        sem id elit lacinia, ac imperdiet mi semper. Vestibulum ac diam luctus, venenatis
                         nunc vitae, ornare quam. Vestibulum tincidunt iaculis
                    </p>  
                    </div>
                </div>
                <div>
                  <div className={styles.elem}>
                    <div className={styles.box}></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a cursus velit
                       ,sed posuere diam. Duis non lacus eget odio malesuada sollicitudin. In consequat
                        sem id elit lacinia, ac imperdiet mi semper. Vestibulum ac diam luctus, venenatis
                         nunc vitae, ornare quam. Vestibulum tincidunt iaculis
                    </p>  
                    </div>
                </div>
                <div>
                  <div className={styles.elem}>
                    <div className={styles.box}></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a cursus velit
                       ,sed posuere diam. Duis non lacus eget odio malesuada sollicitudin. In consequat
                        sem id elit lacinia, ac imperdiet mi semper. Vestibulum ac diam luctus, venenatis
                         nunc vitae, ornare quam. Vestibulum tincidunt iaculis
                    </p>  
                    </div>
                </div>
              </Carousel>
          </div>
    );
  }

export default CarouselComponent;  