import React,{useState} from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';
function SignUp({login,setLogin}) {
  const navigate=useNavigate();
  const [showPassword,setShowPassword]=useState(false);
  const [showConfirmPassword,setShowConfirmPassword]=useState(false);
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
    <div className='sign-up-box'>
      <div className='close-button'>
        <FaTimes onClick={handleCross}/>
      </div>
      <h2 className='sign-up-title'>Create Account</h2>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <input 
        className='input-field'
        name="firstName"
        type="text"
        placeholder='First Name*'
        required/>
        <input 
        className='input-field'
        name="middleName"
        type="text"
        placeholder='Middle Name'/>
        <input
        className='input-field'
        name="lastName"
        type="text"
        placeholder='Last Name*'
        required
        />
        <input 
        className='input-field'
        name="email"
        type="email"
        placeholder='Your Email*'
        required/>
        <div className='password-wrapper'>
            <input 
            className='input-field'
            name="password"
            type={showPassword?"text":"password"}
            placeholder='Your Password*'
            required/>
            <span onClick={()=>setShowPassword(!showPassword)}>{showPassword?<FaEyeSlash/>:<FaEye/>}</span>
        </div>
        <div className='confirmPassword-wrapper'>
            <input
            className='input-field'
            name="confirmPassword"
            type={showConfirmPassword?"text":"password"}
            placeholder='Confirm Password'
            required/>
            <span onClick={()=>setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword?<FaEyeSlash/>:<FaEye/>}</span>
        </div>
        <button type="submit" className='submit-button'>Submit</button>
      </form>
      <p className="or-text">OR</p>
      <p>Already have an account? <a href="/login">Log in</a></p>
    </div>
  )
}

export default SignUp
