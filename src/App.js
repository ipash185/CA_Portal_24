import './App.css';
import Home from './pages/Homepage/Homepage'; 
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './pages/SignIn/SignUp';
import SignIn from './pages/SignIn/SignIn';
import ProfileEdit from './pages/Profile/ProfileEdit';
import ProfileSave from './pages/Profile/ProfileSave';


function App() {
  return (
   
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/SignUp' element={<SignUp />} />
    <Route path='/SignIn' element={<SignIn />} />
    <Route path='/ProfileEdit' element={<ProfileEdit />} />
    <Route path='/ProfileSave' element={<ProfileSave />} />
    
    </Routes>
    

    </BrowserRouter>
  );
}

export default App;
