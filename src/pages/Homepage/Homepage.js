import React from 'react';
import styles from './Homepage.module.css';
import About from '../About/about';
import CarouselComponent from '../Carousel/car';
import Navbar from '../../components/navbar/navbar';
import Incentives from '../incentives/incentive';
import Contact from '../ContactUs/contact';

function Home() {
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.bg}> 
                    <h1 className={styles.heading}>CAMPUS AMBASSADOR PROGRAM</h1>
                    <h2 className ={styles.head2}> KSHITIJ, IIT KHARAGPUR</h2>
                </div>
                <div className={styles.scroll}><About/></div>
                <div className={styles.scroll}><Incentives/></div>
                <div className={styles.scroll}><CarouselComponent/></div>
                <div className={styles.scroll}><Contact/></div>
            </div>
        </div>
    );

}

export default Home;