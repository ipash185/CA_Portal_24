import React, { useState, useEffect } from "react";
import styles from "./Dash.module.css";
import Navbar from "../../components/navbar/navbar";
import Api from '../../API/Api';
import male from '../../images/male_avatar.jpg';
import female from '../../images/female_avatar.jpg';
import unknown from '../../images/unknown_avatar.png';
import Card from "./Card/Card";
import ICS from "./caa.png";
import Fb from "./Facebook-logo.png";
import LIn from "./LinkedIn logo.png";
import Tw from "./Twitter logo.png";
import Insta from "./Insta logo.jpg";
import WhaA from "./WhatsApp Logo.png";

const DashBoard = () => {

  const [auth, setAuth] = useState(false)
  const [auth1, setAuth1] = useState(false)
  const [user, setUser] = useState({});
  useEffect(() => {

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    };



    Api.get(`/user/login_check`, requestOptions).then((res) => {

      // console.log(res.data);
      // console.log(res?.data?.user);
      setAuth1(true)
      if (res?.data?.user?.selection == "yes") {
        setUser(res?.data?.user);
        setAuth(true);
      }
    }).catch((err) => {
      console.log(err);
      setAuth(false);
    })


  }, [])


  return (
    <div className={styles.Container}>
      <div className={styles.TotalDiv}>
        <Navbar show={auth1} />
        <div className={styles.LeftDiv}>
          <div className={styles.NameOf}>
            {auth == false && user != {} ? <>Not found</> : <>
              {user?.first_name} {user?.last_name}
            </>}
            <br /><span style={{fontSize: "1.6rem", marginTop: "0.5rem"}}>KTJ ID : {auth == false && user != {} ? <>Not Applicable</> : <>
              {user?.ca_id}
            </>}</span><br/>
            <br/><br/><br/><br/><br/><br/><br/><span style={{fontFamily: "monospace", fontSize: "1.6rem", lineHeight: "1.6rem"}}>SHARE TO EARN MORE REWARD POINTS</span></div>
          <div className={styles.RewardP}>
            <span style={{whiteSpace: "nowrap", paddingBottom:"0.5rem", borderBottom: "2px solid black"}}>:: REWARD POINTS ::</span> <br/><div style={{textAlign: "center"}}>{auth == false && user != {} ? <>N/A</> : <>
              {user?.points}
            </>}</div>
          </div>
        </div>
        <div className={styles.ProfilePic}><img height="100%" width="100%" src={auth ? user.gender === "MALE" ? male : user.gender === "FEMALE" ? female : unknown : unknown} /></div>
        {/* appears accordingly male, female and unknown , default male */}
        {/* <button className={styles.ChangeAvatar}><p> CHANGE AVATAR</p></button> */}

        {/* <div classname={styles.TopDiv}></div> */}
        {/* <div className={styles.Div1}>
          <div className={styles.Over1}>Hello</div>
        </div> */}

        {/* <div className={styles.Div1}></div> */}
        {/* <div className={styles.Div1}></div> */}
        {/* <div className={styles.Div2}></div> */}
        {/* <div className={styles.Div1}></div> */}
        {/* <div className={styles.Div1}></div> */}
        <div className={styles.cardpos}>
          <Card img={ICS} Heading="INDIAN CASE CHALLENGE" img1={Fb} img2={LIn} img3={Tw} img4={Insta} img5={WhaA} />
      
          <Card img={ICS} Heading="INDIAN CASE CHALLENGE" img1={Fb} img2={LIn} img3={Tw} img4={Insta} img5={WhaA} />
           
          <Card img={ICS} Heading="INDIAN CASE CHALLENGE" img1={Fb} img2={LIn} img3={Tw} img4={Insta} img5={WhaA} />

          <Card img={ICS} Heading="INDIAN CASE CHALLENGE" img1={Fb} img2={LIn} img3={Tw} img4={Insta} img5={WhaA} />

          <Card img={ICS} Heading="INDIAN CASE CHALLENGE" img1={Fb} img2={LIn} img3={Tw} img4={Insta} img5={WhaA} />

          <Card img={ICS} Heading="INDIAN CASE CHALLENGE" img1={Fb} img2={LIn} img3={Tw} img4={Insta} img5={WhaA} />
          </div>
        </div>
      </div>
  );
};

export default DashBoard;
