import React,{useState} from 'react'
import './QuestionsResume.css'
import { useNavigate } from 'react-router-dom';
function QuestionsResume() {
   const [resume,uploadResume]=useState(null);
    const navigate=useNavigate();
   const handleSubmit=()=>{
    if(!resume){
      alert("Upload your resume");
      return;
    }
    navigate('/questions');
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
