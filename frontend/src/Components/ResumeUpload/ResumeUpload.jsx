import React,{useState,useContext} from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import './ResumeUpload.css'
import { Link,useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext.jsx';
import Select from 'react-select'
import {jobOptions} from '../../assets/assets.js'
function ResumeUpload({fileUpload,setFileUpload}) {
    const navigate=useNavigate();
    const [jobTitle,setJobTitle]=useState(null);
    const {url}=useContext(StoreContext);
    const handleSubmit=async()=>{
        if(!fileUpload){
            alert("Upload your resume");
            return;
        }
        if(!jobTitle){
            alert("Select your job Title");
            return;
        }
        const formData=new FormData();
        formData.append("resume",fileUpload);
        formData.append("jobTitle",jobTitle);
        try {
          const response=await axios.post(url+"/api/ats-score/fetch-ats-score",formData,
            {headers:{"Content-Type":"multipart/form-data"}}
          );
          if(response.data.success){
            const data=response.data.data;
            const message=response.data.message;
            navigate('/score',{state:{fileUpload,data,message}});
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
    }
  return (
    <div className='upload-root'>
      <h2 className='title'>Upload your resume</h2>
      <div className='dropzone'>
        <input 
            type="file"
            accept='.pdf'
            onChange={(e)=>setFileUpload(e.target.files[0])}
            required
        />
      <p>Upload pdf only</p>
      </div>
      <div className='Select_JobRole'>
        <Select
         options={jobOptions}
         isSearchable={true}
         placeholder='Enter your job Title'
         onChange={(e)=>setJobTitle(e.value)}
        />
      </div>
      <button className='checkATS' onClick={handleSubmit}>Check ATS Score</button>
    </div>
  )
}

export default ResumeUpload
