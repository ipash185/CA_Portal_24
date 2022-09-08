import styles from './car.module.css';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import ArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import Card from './Card/Card';


function CarouselComponent() {

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>TESTIMONIALS</h1>
      <Carousel className={styles.cara}
        NextIcon={<ArrowForwardIosTwoToneIcon />}
        PrevIcon={<ArrowBackIosTwoToneIcon />}
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
        <Card name="Chitransh Kumawat" img="" inst="Poornima group of institutions" city="Rajasthan" desc="IIT KHARAGPUR, Kshitij Campus ambassador Program helped me become a part of the worldwide student community and interact with several like-minded people. I enjoyed a lot in this internship and improve my leadership skills and communication skills. I interacted with many new people in my tenure as a campus ambassador and this made me become more confident. I would suggest everyone to participate in the tenure to boost their confidence and leadership skills."></Card>
        <Card name="Karan Saxena" img="" inst="Invertis University" city="Uttar Pradesh" desc="First of all to represent IIT Kharagpur in my University by being a Campus ambassador was a great moment of honour for me, During my tenure I boosted my confidence by interacting with my collegues and faculties for circulating info related webinars and workshops and all these events were really helpful from technical as well as non-technical point of view. I have developed my leadership and communication skill in a much better way than before, and our mentors were really supportive and were constantly guiding us in throughout the journey."></Card>
        <Card name="Manasi Badade " img="" inst="Nbn Sinhgad School Of Engineering " city="Maharashtra" desc="The Campus Ambassador program enabled me to interact with college students, which in my opinion is great for networking. The management and leadership skills that I have learned from this position has made me far more confident about my ability to lead others in the future."></Card>
        <Card name="Rahul Kumawate" img="" inst="Poornima University " city="Rajasthan" desc="I am proud to be a campus ambassador of Kshitij IIT Kharagpur .Being a part of it opened numerous doors of opportunities for me. Attending the webinars and sessions of Kshitij were really educational and beneficial for me. These sessions gave me top notch information. I got introduced to so many amazing people. My communication and confidence skills got brushed up. I want to encourage upcoming young students to be a part of it. I also want to thank the mentors who have been very helpful to me . They always kept me updated with Kshitij related assignments. Overall, it was a great experience working with Kshitij IIT Kharagpur. I feel privileged to be a part of it. Looking forward to welcome more such pleasurable opportunities."></Card>
        <Card name="Jaymeen Solanki" img="" inst="SIBM, Nagpura" city="Maharashtra" desc="I played the Campus Ambassador role for one of the most significant events held by IIT Kharagpur, i.e. Kshitij. That was an excellent experience for me to boost my existing skills, and learn new skills through the events held by team Kshitij. It was a pleasure to work with team Kshitij."></Card>
        <Card name="" img="" inst="" city="" desc=""></Card>
        <Card name="" img="" inst="" city="" desc=""></Card>
        <Card name="" img="" inst="" city="" desc=""></Card>
        <Card name="" img="" inst="" city="" desc=""></Card>
        <Card name="" img="" inst="" city="" desc=""></Card>
        <Card name="" img="" inst="" city="" desc=""></Card>
        <Card name="" img="" inst="" city="" desc=""></Card>
        <Card name="" img="" inst="" city="" desc=""></Card>
        <Card name="" img="" inst="" city="" desc=""></Card>
        <Card name="" img="" inst="" city="" desc=""></Card>
      </Carousel>
    </div>
  )
}

export default CarouselComponent;  