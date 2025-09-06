import React,{useState} from 'react'
import {FaTimes} from "react-icons/fa";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Login.css'
function Login({login,setLogin}) {
    const navigate=useNavigate();
    const [showPassword,setShowPassword]=useState(false);
    const handleCross=()=>{
        setLogin(false);
        navigate('/');
    }
    const handleSubmit=async(e)=>{
     e.preventDefault();
     setLogin(true);
     navigate('/');
    }
  return (
    <div className='login-box'>
      <div className='close-button'>
        <FaTimes onClick={handleCross}/>
      </div>
      <h2 className='login-title'>WELCOME BACK</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <input
        className='input-field'
        name='email'
        type='email'
        placeholder='Your Email*'
        required
        />
        <div className='password-wrapper'>
            <input 
            className='input-field'
            name="password"
            type={showPassword?"text":"password"}
            placeholder='Your Password*'
            required
            />
            <span onClick={()=>setShowPassword(prev=>!prev)}>{showPassword?<FaEyeSlash/>:<FaEye/>}</span>
        </div>
         <div className="forgot-password-box">
          <button type="button" className="forgot-password">Forgot your password?</button>
        </div>
        <button type="submit" className="submit-button" >Submit</button>
      </form>
      <p className="or-text">OR</p>
      <p className="signup-link">
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  )
}

export default Login
