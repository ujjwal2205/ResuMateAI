import React from "react";
import "./MiniAbout.css";

const MiniAbout = () => {
  return (
    <section className="about-mini">
      <div className="about-container">
        <h2 className="about-heading">Our Mission</h2>
        <p className="about-text">
          ResuMateAI is your AI-powered career companion — designed to fix weak
          resume lines, detect mistakes, suggest ATS improvements, and prepare
          you for HR & technical questions. Our goal is simple: make your career
          journey smoother and smarter with the power of AI.
        </p>
        <a href="/about" className="about-link">Learn more →</a>
      </div>
    </section>
  );
};

export default MiniAbout;
