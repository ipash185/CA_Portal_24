import './App.css';
import Home from './pages/Homepage/Homepage'; 
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './pages/SignIn/SignUp';
import SignIn from './pages/SignIn/SignIn';


function App() {
  return (
   
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/SignUp' element={<SignUp />} />
    <Route path='/SignIn' element={<SignIn />} />
    </Routes>
    

    </BrowserRouter>
  );
}

export default App;
