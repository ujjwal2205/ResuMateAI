import React from 'react';
import './Template2.css';

function Template2() {
  return (
    <div className="resumeContainer">
      {/* HEADER */}
      <header className="resumeHeader">
        <h1>Your Name</h1>
        <div className="headerInfo">
          <span>Email: your.email@example.com</span>
          <span>Contact: +91-0000000000</span>
          <span>Social Links: www.example.com</span>
        </div>
      </header>

      {/* SUMMARY */}
      <section className="resumeSection">
        <h2>Summary</h2>
        <p>
          A concise professional summary goes here. Highlight key skills and experience in 2-3 lines.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="resumeSection">
        <h2>Experience</h2>
        <div className="experienceItem">
          <h3>Experience 1 — Company Name</h3>
          <span>Jan 2023 - Present</span>
          <ul>
            <li>Responsibility or achievement 1</li>
            <li>Responsibility or achievement 2</li>
          </ul>
        </div>
        <div className="experienceItem">
          <h3>Experience 2 — Company Name</h3>
          <span>Jun 2021 - Dec 2022</span>
          <ul>
            <li>Responsibility or achievement 1</li>
            <li>Responsibility or achievement 2</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="resumeSection">
        <h2>Projects</h2>
        <div className="projectItem">
          <h3>Project 1</h3>
          <p>Brief description of Project 1. Technologies used: HTML, CSS, JS</p>
        </div>
        <div className="projectItem">
          <h3>Project 2</h3>
          <p>Brief description of Project 2. Technologies used: React, Node.js</p>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="resumeSection">
        <h2>Education</h2>
        <div className="educationItem">
          <h3>Bachelor's Degree — College Name</h3>
          <span>2023 - 2027 | CGPA: 9.0</span>
        </div>
        
      </section>

      {/* SKILLS */}
      <section className="resumeSection">
        <h2>Skills</h2>
        <ul className="skillsList">
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          <li>Skill 4</li>
        </ul>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="resumeSection">
        <h2>Achievements</h2>
        <ul className="achievementsList">
          <li>Achievement 1</li>
          <li>Achievement 2</li>
        </ul>
      </section>

      {/* EXTRACURRICULAR */}
      <section className="resumeSection">
        <h2>ExtraCurricular Activities</h2>
        <ul className="extraList">
          <li>Activity 1</li>
          <li>Activity 2</li>
        </ul>
      </section>
    </div>
  );
}

export default Template2;
