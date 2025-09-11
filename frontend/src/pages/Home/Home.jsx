import React,{useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import Header from '../../Components/Header/Header.jsx'
import Features from '../../Components/Features/Features.jsx'
import MiniAbout from '../../Components/MiniAbout/MiniAbout.jsx'
import { toast } from 'react-toastify';
function Home({login}) {
  const navigate=useNavigate();
  const location=useLocation();
  useEffect(()=>{
 if(location.state?.toastMessage){
 toast.success(location.state.toastMessage);
 navigate(location.pathname,{replace:true,state:{}});
 }},[location,navigate])
  useEffect(()=>{
    if(location.hash){
      const id=location.hash.replace('#','');
      const el=document.getElementById(id);
      if(el){
        setTimeout(()=>{
          el.scrollIntoView({behavior:'smooth'});
        },100);
      }
    }
  },[location]);
  return (
    <div>
      
      <Header login={login}/>
      <Features/>
      <MiniAbout/>
      
    </div>
  )
}

export default Home
