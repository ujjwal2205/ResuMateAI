import React,{useState} from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import AboutUs from './Components/AboutUs/AboutUs.jsx'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx'
import Footer from './Components/Footer/Footer.jsx'
function App() {
  const [login,setLogin]=useState(false);
  return (
    <div>
    <Navbar login={login} setLogin={setLogin}/>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/login' element={<LoginPage login={login} setLogin={setLogin}/>}/>
      <Route path='/signup' element={<SignUpPage login={login} setLogin={setLogin}/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
