import React,{useState,useContext} from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';
import { GoogleLogin } from '@react-oauth/google';
import { toast } from 'react-toastify';
import axios from "axios";
import { StoreContext } from '../../context/StoreContext';
function SignUp({login,setLogin}) {
  const navigate=useNavigate();
  const {url}=useContext(StoreContext);
  const [showPassword,setShowPassword]=useState(false);
  const [showConfirmPassword,setShowConfirmPassword]=useState(false);
  const [data,setData]=useState({
    firstName:"",
    middleName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
  })
  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData((prev)=>({...prev,[name]:value}));
  }
  const handleCross=()=>{
    setLogin(false);
    navigate('/');
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const response=await axios.post(url+"/api/user/signUp",data);
      if(response.data.success){
        setLogin(true);
        localStorage.setItem("token",response.data.token);
        navigate('/',{state:{toastMessage:"SignUp Successful!"}});
      }
      else{
      setLogin(false);
      toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }
  const handleSuccess=async (CredentialResponse)=>{
      const token=CredentialResponse.credential;
      try{
      const response=await axios.post(url+"/api/user/googleLogin",{
        idToken:token,
      })
      if(response.data.success){
        setLogin(true);
        navigate('/',{state:{toastMessage:"Login Successful!"}});
      }
      else{
        setLogin(false);
        toast.error(response.data.message);
      }
      }
      catch(error){
        console.log(error);
        toast.error(error.message);
      }
    }
    const handleError=async()=>{
      console.log("Google login is not working.Try again later!");
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
        onChange={handleChange}
        required/>
        <input 
        className='input-field'
        name="middleName"
        type="text"
        onChange={handleChange}
        placeholder='Middle Name'/>
        <input
        className='input-field'
        name="lastName"
        type="text"
        onChange={handleChange}
        placeholder='Last Name*'
        required
        />
        <input 
        className='input-field'
        name="email"
        type="email"
        onChange={handleChange}
        placeholder='Your Email*'
        required/>
        <div className='password-wrapper'>
            <input 
            className='input-field'
            name="password"
            onChange={handleChange}
            type={showPassword?"text":"password"}
            placeholder='Your Password*'
            required/>
            <span onClick={()=>setShowPassword(!showPassword)}>{showPassword?<FaEyeSlash/>:<FaEye/>}</span>
        </div>
        <div className='confirmPassword-wrapper'>
            <input
            className='input-field'
            onChange={handleChange}
            name="confirmPassword"
            type={showConfirmPassword?"text":"password"}
            placeholder='Confirm Password'
            required/>
            <span onClick={()=>setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword?<FaEyeSlash/>:<FaEye/>}</span>
        </div>
        <button type="submit" className='submit-button'>Submit</button>
      </form>
      <p className="or-text">OR</p>
      <div className='google-login'>
        <GoogleLogin
         onSuccess={handleSuccess}
         onError={handleError}
         />
      </div>
      <p>Already have an account? <a href="/login">Log in</a></p>
    </div>
  )
}

export default SignUp
