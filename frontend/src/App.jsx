import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import AboutUs from './Components/AboutUs/AboutUs.jsx'
import Footer from './Components/Footer/Footer.jsx'
function App() {
  return (
    <div>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
