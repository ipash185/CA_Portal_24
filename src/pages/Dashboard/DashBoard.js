import React from "react";
import styles from "./Dash.module.css";
import Navbar from "../../components/navbar/navbar";

const DashBoard = () => {
  return (
    <div>
      <div className={styles.TotalDiv}>
        <Navbar />
        <div className={styles.LeftDiv}>
            <div className={styles.NameOf}>NAME OF THE CANDI<br />KTJ ID : KTJ229856</div>
            <div className={styles.RewardP}></div>
        </div>
        <div classname={styles.TopDiv}></div>
        <div className={styles.Div1}>
          <div className={styles.Over1}>Hello</div>
        </div>

        <div className={styles.Div1}></div>
        <div className={styles.Div1}></div>
        <div className={styles.Div2}></div>
        <div className={styles.Div1}></div>
        <div className={styles.Div1}></div>
      </div>
    </div>
  );
};

export default DashBoard;
