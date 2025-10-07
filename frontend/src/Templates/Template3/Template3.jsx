import React from 'react';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import './Template3.css';

function Template3() {
  return (
    <div className="resumeContainer2">
      {/* HEADER */}
      <header className="resumeHeader2">
        <h1>Your Name</h1>
        <p className="contactInfo">
          Email: your.email@example.com | Contact: +91-0000000000
        </p>
        <p className="socialLinks">
          <FaLinkedin /> linkedin.com/in/yourprofile &nbsp;|&nbsp;
          <FaGithub /> github.com/yourprofile &nbsp;|&nbsp;
          <FaGlobe /> yoursite.com
        </p>
      </header>

      <div className="resumeBody2">
        {/* LEFT COLUMN */}
        <div className="leftColumn2">
          {/* SKILLS */}
          <section className="section2">
            <h2>Skills</h2>
            <ul>
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
              <li>Skill 4</li>
            </ul>
          </section>

          {/* ACHIEVEMENTS */}
          <section className="section2">
            <h2>Achievements</h2>
            <ul>
              <li>Achievement 1</li>
              <li>Achievement 2</li>
            </ul>
          </section>

          {/* EXTRACURRICULAR */}
          <section className="section2">
            <h2>ExtraCurricular</h2>
            <ul>
              <li>Activity 1</li>
              <li>Activity 2</li>
            </ul>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="rightColumn2">
          {/* SUMMARY */}
          <section className="section2">
            <h2>Summary</h2>
            <p>
              A concise professional summary goes here. Highlight key skills and experience in 2-3 lines.
            </p>
          </section>

          {/* EXPERIENCE */}
          <section className="section2">
            <h2>Experience</h2>
            <div className="experienceItem2">
              <h3>Experience 1 — Company Name</h3>
              <span>Jan 2023 - Present</span>
              <ul>
                <li>Responsibility or achievement 1</li>
                <li>Responsibility or achievement 2</li>
              </ul>
            </div>
            <div className="experienceItem2">
              <h3>Experience 2 — Company Name</h3>
              <span>Jun 2021 - Dec 2022</span>
              <ul>
                <li>Responsibility or achievement 1</li>
                <li>Responsibility or achievement 2</li>
              </ul>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="section2">
            <h2>Projects</h2>
            <div className="projectItem2">
              <h3>Project 1</h3>
              <p>Brief description. Tech used: HTML, CSS, JS</p>
            </div>
            <div className="projectItem2">
              <h3>Project 2</h3>
              <p>Brief description. Tech used: React, Node.js</p>
            </div>
          </section>

          {/* EDUCATION */}
          <section className="section2">
            <h2>Education</h2>
            <div className="educationItem2">
              <h3>Bachelor's Degree — College Name</h3>
              <span>2023 - 2027 | CGPA: 9.0</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Template3;
