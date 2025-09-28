import React,{useState,useContext} from 'react'
import {FaTimes} from "react-icons/fa";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {GoogleLogin} from "@react-oauth/google";
import {StoreContext} from '../../context/StoreContext.jsx';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import axios from "axios"
import './Login.css'
function Login({login,setLogin}) {
    const navigate=useNavigate();
    const {url}=useContext(StoreContext);
    const [showPassword,setShowPassword]=useState(false);
    const [data,setData]=useState(
      {email:"",
       password:""
      }
    )
    const handleCross=()=>{
        setLogin(false);
        navigate('/');
    }
    const handleSubmit=async(e)=>{
     e.preventDefault();
     try {
       const response=await axios.post(url+"/api/user/login",data);
       if(response.data.success){
        setLogin(true);
        navigate('/',{state:{toastMessage:"Login Successful!"}});
       }
       else{
        setLogin(false);
        toast.error(response.data.message);
       }
     } catch (error) {
      console.log(error);
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
    const handleChange=async(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setData({...data,[name]:value});
    }
    const handleForgotPassword=async()=>{
      try {
        if(!data.email){
          toast.error("Please Enter your Email");
          return;
        }
        toast.success("Checking your email");
        const response=await axios.post(url+"/api/forgot-password/otp",{
          email:data.email
        })
        if(response.data.success){
          navigate("/forgot-password",{state:{toastMessage:response.data.message,email:data.email}});
        }
        else{
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
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
        onChange={handleChange}
        required
        />
        <div className='password-wrapper'>
            <input 
            className='input-field'
            name="password"
            type={showPassword?"text":"password"}
            placeholder='Your Password*'
            onChange={handleChange}
            required
            />
            <span onClick={()=>setShowPassword(prev=>!prev)}>{showPassword?<FaEyeSlash/>:<FaEye/>}</span>
        </div>
         <div className="forgot-password-box">
          <button type="button" className="forgot-password" onClick={handleForgotPassword}>Forgot your password?</button>
        </div>
        <button type="submit" className="submit-button" >Submit</button>
      </form>
      <p className="or-text">OR</p>
      <div className='google-login'>
        <GoogleLogin
         onSuccess={handleSuccess}
         onError={handleError}
         />
      </div>
      <p className="signup-link">
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  )
}

export default Login
