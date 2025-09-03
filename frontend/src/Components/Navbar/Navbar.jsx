import React,{useState, useEffect} from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";
function Navbar() {
    const [showDropdown,setShowDropdown]=useState(false);
   
  return (
    <div className='navbar'>
     <div className='websiteName'>
        <Link to="/">ResuMateAI</Link>
     </div>
     <div className='middle'>
        <Link to="/">Home</Link>
        <Link to="/about">AboutUs</Link>
        <div className='dropdown-wrapper' onMouseEnter={()=>setShowDropdown(true)}>
        <button className='dropdown'>Services</button>
        {showDropdown&&(
        <div className='dropdown-content' onMouseLeave={()=>setShowDropdown(false)}>
        <Link to="/resumeChecker" onClick={()=>setShowDropdown(false)}>Resume Checker</Link>
        <Link to="/resumeGenerator" onClick={()=>setShowDropdown(false)}>Resume Generator</Link>
        <Link to="/interviewPrep" onClick={()=>setShowDropdown(false)}>Interview Prep</Link>
        </div>
        )}</div>
     </div>
     <div className='Right'>
        <button className="loginBtn">Login / SignUp</button>
     </div>
    </div>
  )
}

export default Navbar
