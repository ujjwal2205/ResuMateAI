import React,{useState,useContext} from 'react'
import { StoreContext } from '../../context/StoreContext.jsx';
import './QuestionsResume.css'
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function QuestionsResume() {
   const [resume,uploadResume]=useState(null);
    const {url}=useContext(StoreContext);
    const navigate=useNavigate();
   const handleSubmit=async()=>{
    if(!resume){
      alert("Upload your resume");
      return;
    }
    const formData=new FormData();
    formData.append("resume",resume);
    const response=await axios.post(url+"/api/questions/fetch-questions",formData,{
      headers:{"Content-Type":"multipart/form-data"}
    })
    try {
      if(response.data.success){
        const data=response.data.data;
        const message=response.data.message;
        navigate('/questions',{state:{data,message}});
      }
      else{
        console.log(response.data.messsage);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
   }
  return (
    <div className='questionsResume'>
      <div className='input'>
        <h2 className='title'>Upload Your Resume</h2>
        <div className='resume'>
          <input
          type="file"
          accept='.pdf'
          onChange={(e)=>uploadResume(e.target.files[0])}
          required/>
          <p>Upload pdf only</p>
        </div>
      </div>
      <button className='generateQuestions' onClick={handleSubmit}>Generate Questions</button>
    </div>
  )
}

export default QuestionsResume
