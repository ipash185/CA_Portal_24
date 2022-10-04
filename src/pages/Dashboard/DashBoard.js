import React from "react";
import styles from "./Dash.module.css";
import Navbar from "../../components/navbar/navbar";

const DashBoard = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.TotalDiv}>
        <div className={styles.LeftDiv}></div>
        <div classname={styles.Head1}>LIVE EVENTS</div>
        <div className={styles.Div1}></div>
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
