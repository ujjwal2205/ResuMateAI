import React from 'react'
import './AboutUs.css'
function AboutUs() {
  return (
    <div className="about">
      <section className="about-intro">
        <h1>About ResuMateAI</h1>
        <p>
          ResuMateAI is an AI-powered platform designed to help candidates create
          professional and ATS-friendly resumes that stand out in today’s
          competitive job market. Our mission is simple — to make the
          resume-building process smarter, faster, and completely stress-free.
          <br /><br />
          We understand that many job seekers often lose opportunities, not because
          they lack skills or experience, but because their resumes fail to pass
          through modern Applicant Tracking Systems (ATS). ResuMateAI eliminates
          this barrier by analyzing your resume in real time, spotting errors,
          filling gaps, and restructuring content to meet recruiter expectations.
          <br /><br />
          With advanced AI, ResuMateAI suggests impactful phrases, highlights your
          achievements, and ensures your resume is not just error-free but also
          tailored to your career goals. From fixing grammar and formatting issues
          to adding industry-specific keywords, every detail is optimized to make
          sure your profile reaches the right employers.
          <br /><br />
          Whether you’re a fresher taking your first step, or an experienced
          professional aiming for the next big role, ResuMateAI is built to guide
          you at every stage. We believe every candidate deserves a fair chance to
          showcase their potential — and it starts with a resume that truly speaks
          for you.
          </p>
          </section>

         <section className="about-cards">
         <div className="card">
          <h2>Our Mission</h2>
          <p>
            To empower job seekers by providing them with polished,
            recruiter-ready resumes that highlight their strengths.
          </p>
         </div>
         <div className="card">
          <h2>What We Do</h2>
          <p>
            We analyze resumes, fix weak lines, improve formatting, and ensure
            ATS compatibility with industry standards.
          </p>
         </div>
         <div className="card">
          <h2>Why Choose Us</h2>
          <p>
            With AI-driven insights and role-specific improvements, ResuMateAI
            ensures your resume makes the right impact.
          </p>
         </div>
         </section>
        </div>
  )
}

export default AboutUs
