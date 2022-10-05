import React, {useState, useEffect} from "react";
import styles from "./Dash.module.css";
import Navbar from "../../components/navbar/navbar";
import Api from '../../API/Api';

const DashBoard = () => {

  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState({});
  useEffect(() => {

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    };



    Api.get(`/user/login_check`, requestOptions).then((res) => {

      // console.log(res.data);
      setUser(res?.data?.user)
      setAuth(true);
      console.log(res.data.user)
    }).catch((err) => {
      console.log(err);
      setAuth(false);
    })


  }, [])


  return (
    <div>
      <div className={styles.TotalDiv}>
        <Navbar show={auth}/>
        <div className={styles.LeftDiv}>
            <div className={styles.NameOf}>
            {auth == false && user!={}?<>loading..</>:<>
            {user?.first_name} {user?.last_name} 
            </>}
            <br />KTJ ID : 
            {auth == false && user!={}?<>loading..</>:<>
            {user?.ca_id}
            </>}
            <br /><br /><br /><br /><br />SHARE TO EARN MORE REWARD POINTS</div>
            <div className={styles.RewardP}>
            {auth == false && user!={}?<>loading..</>:<>
            {user?.points}
            </>}    
            </div>
        </div>
        {/* <div classname={styles.TopDiv}></div> */}
        {/* <div className={styles.Div1}>
          <div className={styles.Over1}>Hello</div>
        </div> */}

        {/* <div className={styles.Div1}></div> */}
        {/* <div className={styles.Div1}></div> */}
        {/* <div className={styles.Div2}></div> */}
        {/* <div className={styles.Div1}></div> */}
        {/* <div className={styles.Div1}></div> */}
      </div>
    </div>
  );
};

export default DashBoard;
