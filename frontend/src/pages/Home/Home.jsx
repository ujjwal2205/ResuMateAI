import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom';
import Header from '../../Components/Header/Header.jsx'
import Features from '../../Components/Features/Features.jsx'
import MiniAbout from '../../Components/MiniAbout/MiniAbout.jsx'
function Home() {
  const location=useLocation();
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
      
      <Header/>
      <Features/>
      <MiniAbout/>
      
    </div>
  )
}

export default Home
