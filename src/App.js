import React from 'react';
import './App.css';
import Home from './pages/Homepage/Homepage';
import Home2 from './pages/Homepage/Homepage2'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignIn/SignUp';
import SignIn from './pages/SignIn/SignIn';
// import Registrations from './admin_panel/Registrations/Registrations';
import ProfileEdit from './pages/Profile/ProfileEdit';
import ProfileSave from './pages/Profile/ProfileSave';
import { useEffect, useState } from "react";
import Api from './API/Api';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    };

    fetch(`https://cap-ktj-backend.herokuapp.com/user/login_check`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        // setUser(data.user);
        setLoading(false);
      })
      .catch((err) => { console.log(err); localStorage.removeItem('token'); })
      .finally(() => setLoading(false));
  }, []);
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignUp' getMessage={({ params }) => params.message} element={<SignUp />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/Profile' element={<ProfileEdit />} />
        <Route path='/ProfileSave' element={<ProfileSave />} />
        {/* <Route path='/Registrations' element={<Registrations />} /> */}
        <Route path  = '/home' element = {<Home2/>}/>
      </Routes>


    </BrowserRouter>
  );
}

export default App;
