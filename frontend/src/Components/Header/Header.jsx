import React from 'react'
import './Header.css'
import heroImg from "../../assets/ats-resume-checker-hero.png";
import {Link} from 'react-router-dom';
function Header({login}) {
  return (
    <header className="header">
      <div className="header-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
      </div>
      
      <div className="header-content">
        <div className="header-left">
          <div className="tagline-container">
            <div className="tagline-badge">
              <span className="rocket-icon">🚀</span>
              <span className="tagline-text">Your All-in-One Job Application Assistant</span>
            </div>
          </div>
          
          <h1 className="header-title">
           <span className="title-line">Upload. Analyze. Improve.</span>
<span className="title-line gradient-text">Get Hired Faster</span>
          </h1>
          
          <p className="header-subtitle">
            Detect errors, optimize your resume, boost your ATS score, and tackle job questions — all with AI precision.
          </p>
          
          <div className="header-actions">
            {login?
             <Link to={'/upload'} className="btn-primary">
              <span className="btn-text">Get Free ATS Score</span>
              <div className="btn-shine"></div>
              </Link>
            
            :(
             <Link to={'/login'} className="btn-primary">
              <span className="btn-text">Get Free ATS Score</span>
              <div className="btn-shine"></div>
              </Link>
            )}

            <button className="btn-secondary">
              Prepare for Interview
            </button>
          </div>
          
          <div className="trust-indicators">
            <div className="trust-item">
              <span className="trust-label">AI Powered</span>
            </div>
            <div className="trust-item">
              <span className="trust-label">Instant Insights</span>
            </div>
            <div className="trust-item">
              <span className="trust-label">Career Ready</span>
            </div>
          </div>
        </div>

        <div className="header-right">
          <div className="image-container">
            <div className="image-glow"></div>
            <img
              src={heroImg}
              alt="ATS Resume Checker Dashboard"
              className="header-image"
            />
            <div className="floating-elements">
              <div className="floating-card floating-card-1">
                <div className="card-icon">✓</div>
                <div className="card-text">ATS Score: 94%</div>
              </div>
              <div className="floating-card floating-card-2">
                <div className="card-icon">⚡</div>
                <div className="card-text">2s Analysis</div>
              </div>
              <div className="floating-card floating-card-3">
                <div className="card-icon">🎯</div>
                <div className="card-text">Keywords Match</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header