import React,{useState} from 'react'
import './Questions.css'
import { resumeQnA } from '../../assets/assets.js'
function Questions() {
  const [visible,setVisible]=useState(null);
  return (
    <div className='Questions'>
     <h2 className='heading'>Important Interview Questions</h2>
      {resumeQnA.map((que,idx)=>(
        <div key={idx} className='question'>
        <h3>{que.question}</h3>
        <button onClick={()=>setVisible(visible===idx?null:idx)} className='SolutionButton'>
            {visible===idx?"Hide Answer":"Show Answer"}
        </button>
        {visible===idx &&<p>{que.answer}</p>}
        </div>
      ))}
    </div>
  )
}

export default Questions
