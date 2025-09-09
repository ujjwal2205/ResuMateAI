import React from 'react'
import ResumeUpload from '../../Components/ResumeUpload/ResumeUpload.jsx'
function ResumeCheckerUploadPage({fileUpload,setFileUpload}) {
  return (
    <div>
    <ResumeUpload fileUpload={fileUpload} setFileUpload={setFileUpload}/>  
    </div>
  )
}

export default ResumeCheckerUploadPage
