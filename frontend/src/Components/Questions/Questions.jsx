import React,{useState,useEffect} from 'react'
import './Questions.css'
import { resumeQnA } from '../../assets/assets.js'
import {useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
function Questions() {
  const [visible,setVisible]=useState(null);
  const location=useLocation();
  const {data,message}=location.state;
  useEffect(()=>{
    toast.success(message);
  },[message])
  return (
    <div className='Questions'>
     <h2 className='heading'>Important Interview Questions</h2>
      {data.resumeQnA.map((que,idx)=>(
        <div key={idx} className='question'>
        <h3>{que.question}</h3>
        <button onClick={()=>setVisible(visible===idx?null:idx)} className='SolutionButton'>
            {visible===idx?"Hide Answer":"Show Answer"}
        </button>
        {visible===idx &&<p>{que.answer}</p>}
        </div>)
      )}
    </div>
  )
}

export default Questions
