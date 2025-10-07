import React from 'react';
import './Template1.css';

function Template1() {
  return (
    <div className="resumeContainer7">
      {/* HEADER */}
      <header className="resumeHeader7">
        <h1>Your Name</h1>
        <p className="contact7">
          Email: your.email@example.com | Contact: +91-0000000000 | LinkedIn: linkedin.com/in/yourprofile | GitHub: github.com/yourprofile | Website: yoursite.com
        </p>
      </header>

      {/* SUMMARY */}
      <section className="section7">
        <h2>Professional Summary</h2>
        <p>
          Concise summary highlighting your experience, key skills, and achievements in 2-3 lines.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="section7">
        <h2>Experience</h2>
        <div className="item7">
          <h3>Job Title — Company Name</h3>
          <span>Jan 2023 - Present</span>
          <ul>
            <li>Responsibility or achievement 1</li>
            <li>Responsibility or achievement 2</li>
          </ul>
        </div>
        <div className="item7">
          <h3>Job Title — Company Name</h3>
          <span>Jun 2021 - Dec 2022</span>
          <ul>
            <li>Responsibility or achievement 1</li>
            <li>Responsibility or achievement 2</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section7">
        <h2>Projects</h2>
        <div className="item7">
          <h3>Project 1</h3>
          <p>Brief description. Tech used: HTML, CSS, JS</p>
        </div>
        <div className="item7">
          <h3>Project 2</h3>
          <p>Brief description. Tech used: React, Node.js</p>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section7">
        <h2>Education</h2>
        <div className="item7">
          <h3>Bachelor's Degree — College Name</h3>
          <span>2023 - 2027 | CGPA: 9.0</span>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section7">
        <h2>Skills</h2>
        <p>Skill 1, Skill 2, Skill 3, Skill 4, Skill 5</p>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section7">
        <h2>Achievements</h2>
        <ul>
          <li>Achievement 1</li>
          <li>Achievement 2</li>
        </ul>
      </section>

      {/* EXTRACURRICULAR */}
      <section className="section7">
        <h2>ExtraCurricular Activities</h2>
        <ul>
          <li>Activity 1</li>
          <li>Activity 2</li>
        </ul>
      </section>
    </div>
  );
}

export default Template1;
