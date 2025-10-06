import React,{useState, useEffect} from 'react'
import './Navbar.css'
import {FaUserCircle} from "react-icons/fa";
import {Link} from "react-router-dom";
function Navbar({login,setLogin}) {
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
        {login?(<>
        <Link to="/upload" onClick={()=>setShowDropdown(false)}>Resume Checker</Link>
        <Link to="/questionsResume" onClick={()=>setShowDropdown(false)}>Interview Prep</Link>
        <Link to="/user-information" onClick={()=>setShowDropdown(false)}>Resume Generator</Link>
        </>):(<><Link to="/login" onClick={()=>setShowDropdown(false)}>Resume Checker</Link>
        <Link to="/login" onClick={()=>setShowDropdown(false)}>Interview Prep</Link>
        <Link to="/login" onClick={()=>setShowDropdown(false)}>Resume Generator</Link>
        </>)}
        </div>
        )}</div>
     </div>
     <div className='Right'>
        {login?(
          <div className='user-icon' onClick={()=>{setLogin(!login);localStorage.removeItem("token")}}>
          <FaUserCircle/>
          </div>
        )  
        :(
        <Link to="/login"><button className="loginBtn">Login / SignUp</button></Link>
        )}
     </div>
    </div>
  )
}

export default Navbar
