import React from "react";
import "./Features.css";
import { Zap, FileText, HelpCircle, Briefcase } from "lucide-react"; 

function Features() {
  const features = [
    {
      icon: <Zap className="feature-icon" />,
      title: "ATS Score Instantly",
      desc: "Get an instant ATS compatibility score for your resume.",
    },
    {
      icon: <FileText className="feature-icon" />,
      title: "AI Resume Improvement",
      desc: "Fix weak lines and enhance impact with AI suggestions.",
    },
    {
      icon: <HelpCircle className="feature-icon" />,
      title: "Smart Q&A",
      desc: "Prepare answers for common HR & technical questions.",
    },
    {
      icon: <Briefcase className="feature-icon" />,
      title: "Career Ready",
      desc: "Optimize your resume for jobs and internships with ease.",
    },
  ];

  return (
    <section className="features" id='features'>
      <h2 className="features-title">Why Choose ResuMateAI?</h2>
      <div className="features-grid">
        {features.map((item, idx) => (
          <div key={idx} className="feature-card">
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
