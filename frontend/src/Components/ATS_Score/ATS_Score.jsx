import React, { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
/*Ye PDF.js ka main entry point hai.
Isme sari functions hote hain jaise:

getDocument() → PDF load karne ke liye

getPage() → Page nikalne ke liye

render() → Page ko canvas pe draw karne ke liye */
import pdfWorker from "pdfjs-dist/build/pdf.worker?url"; 
/*
Ye ek background helper script hai jo PDF parsing heavy kaam karta hai.

File ka path hai: pdfjs-dist/build/pdf.worker.js.

Ye file khud run nahi hoti, isko web worker ke taur pe load karna padta hai.

Matlab ye library ka "assistant" hai jo background me PDF parse karega.

Without worker → UI freeze karega
With worker → Background me parsing, UI smooth. 

Normal import "pdfjs-dist/build/pdf.worker.js" karoge → Vite confuse ho jayega:
“Ye toh ek plain JS file hai, mai ise module ki tarah treat karu ya worker ki tarah?”
?url ka matlab:
Vite/Webpack ko bolna:
"Is file ko bundle mat karo, mujhe iska final URL return karke de do." */
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;
/*Sabko Jodna (GlobalWorkerOptions.workerSrc)

Ab tumhe library ko batana padega ki:

“Agar tumhe worker chahiye, to ye wala URL use karo.” */
import './ATS_Score.css'
import { resumeSuggestions } from '../../assets/assets.js'
import { useLocation } from 'react-router-dom';
function ATS_Score() {
    const score = 90;
    const location=useLocation();
    const {fileUpload}=location.state;
   const canvasRef = useRef(null);

  useEffect(() => {
    if (!fileUpload) return;

    const fileReader = new FileReader();
    fileReader.onload = function () {
      const typedArray = new Uint8Array(this.result);
      pdfjsLib.getDocument(typedArray).promise.then((pdf) => {
        pdf.getPage(1).then((page) => {
          const viewport = page.getViewport({ scale: 1.2 });
          const canvas = canvasRef.current;
          const context = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          page.render({
            canvasContext: context,
            viewport: viewport,
          });
        });
      });
    };
    fileReader.readAsArrayBuffer(fileUpload);
  }, [fileUpload]);
  return (
    <div className='score'>
      <div className='left-resume-view'>
      
        {fileUpload ? (
                    <canvas ref={canvasRef}></canvas>
                ) : (
                    <p>No file uploaded</p>
                )}
   
      </div>
      <div className='right-side'>
      <div className='result'>
        <h2 className='ATS_Score'>Your ATS score is</h2>
        <span>90</span>
        <p>This is a good score.Let's dive into what we checked your resume for and how you can improve your resume</p>
        <div className='green-red-bar'>
        <div className='score-pointer'
        style={{ left: `${score}%` }}
        ></div>
        </div>
      </div>
      <div className='Suggestions'>
        {resumeSuggestions.map((sug,idx)=>(
            <div key={idx} className='suggestion-card'>
                <h3>{sug.title}</h3>
                <p>{sug.body}</p>
            </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default ATS_Score
