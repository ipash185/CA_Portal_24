import React from 'react';
import styles from './Homepage.module.css';
import About from '../About/about';
import CarouselComponent from '../Carousel/car';
import Navbar from '../../components/navbar/navbar';
import Incentives from '../Incentives/incentive';
import Contact from '../ContactUs/contact';

function Home() {
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.bg}>
                    <div className={styles.im}></div>
                    <div className={styles.vert}></div>
                    <h1 className={styles.heading}>CAMPUS<br />AMBASSADOR<br />PROGRAM</h1>
                </div>
                <div className={styles.bod}>
                    <About/>
                    <Incentives/>
                    <CarouselComponent/>
                    <Contact/>
                </div>
        </div>
        </div>
    );

}

export default Home;