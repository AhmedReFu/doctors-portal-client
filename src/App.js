
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appointment/Appoinment';
import Home from './Pages/Home/Home';
import EmailVerify from './Pages/Login/EmailVerify';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import ResetEmail from './Pages/Login/ResetEmail';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/appointment' element={
          <RequireAuth><Appoinment /></RequireAuth>
        }></Route>
        <Route path='/forget' element={<ResetEmail />}></Route>
        <Route path='/verify' element={<EmailVerify />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
