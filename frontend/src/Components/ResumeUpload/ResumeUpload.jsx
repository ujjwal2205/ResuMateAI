import React,{useState} from 'react'
import './ResumeUpload.css'
import { Link,useNavigate } from 'react-router-dom'
import Select from 'react-select'
import {jobOptions} from '../../assets/assets.js'
function ResumeUpload({fileUpload,setFileUpload}) {
    const navigate=useNavigate();
    const [jobTitle,setJobTitle]=useState(null);
    const handleSubmit=()=>{
        if(!fileUpload){
            alert("Upload your resume");
            return;
        }
        if(!jobTitle){
            alert("Select your job Title");
            return;
        }
       navigate('/score',{state:{fileUpload}});
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
