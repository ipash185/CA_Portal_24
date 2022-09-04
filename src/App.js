import './App.css';
import Home from './pages/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignIn/SignUp';
import SignIn from './pages/SignIn/SignIn';
import ProfileEdit from './pages/Profile/ProfileEdit';
import ProfileSave from './pages/Profile/ProfileSave';
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    };

    fetch("http://127.0.0.1:5000/user/login_check", requestOptions)
      .then((res) => res.json())
      .then((data) => { setUser(data.user); setLoading(false); })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/ProfileEdit' element={<ProfileEdit />} />
        <Route path='/ProfileSave' element={<ProfileSave />} />

      </Routes>


    </BrowserRouter>
  );
}

export default App;
