import React,{useState,useContext} from 'react'
import { Route,Routes } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import { StoreContext } from './context/StoreContext.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import AboutUs from './Components/AboutUs/AboutUs.jsx'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx'
import ResumeCheckerUploadPage from './pages/ResumeCheckerUploadPage/ResumeCheckerUploadPage.jsx'
import ATS_ScorePage from './pages/ATS_ScorePage/ATS_ScorePage.jsx'
import QuestionsResumePage from './pages/QuestionsResumePage/QuestionsResumePage.jsx'
import Questions from './Components/Questions/Questions.jsx'
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage.jsx'
import User_InformationPage from './pages/User_InformationPage/User_InformationPage.jsx'
import TemplatesPage from './pages/TemplatesPage/TemplatesPage.jsx'
import Footer from './Components/Footer/Footer.jsx'
function App() {
  const{token}=useContext(StoreContext);
  const [login,setLogin]=useState(()=>token?true:false);
  const [fileUpload,setFileUpload]=useState(null);
  return (
    <div>
    <ToastContainer/>
    <Navbar login={login} setLogin={setLogin}/>
     <Routes>
      <Route path='/' element={<Home login={login}/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/login' element={<LoginPage login={login} setLogin={setLogin}/>}/>
      <Route path='/signup' element={<SignUpPage login={login} setLogin={setLogin}/>}/>
      <Route path='/upload' element={<ResumeCheckerUploadPage fileUpload={fileUpload} setFileUpload={setFileUpload}/>}/>
      <Route path='/score' element={<ATS_ScorePage/>}/>
      <Route path='/questionsResume' element={<QuestionsResumePage/>}/>
      <Route path='/questions' element={<Questions/>}/>
      <Route path='/forgot-password' element={<ForgotPasswordPage/>}/>
      <Route path='/user-information' element={<User_InformationPage/>}/>
      <Route path='/templates' element={<TemplatesPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
