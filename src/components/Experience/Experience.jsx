import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="exp-edu-section">

      <h2 className="section-title">Experience & Education</h2>

      <div className="exp-edu-grid">

        {/* -------- LEFT COLUMN (Experience) -------- */}
        <div className="exp-box">
          <h3 className="box-title">Experience</h3>

          <div className="exp-item">
            <h4>Frontend Developer — Freelance & Personal Projects</h4>
            <span className="year">2023 – Present</span>
            <ul>
              <li>Built real-world projects using React, Next.js, Tailwind CSS & MongoDB.</li>
              <li>Developed responsive UI components and reusable design systems.</li>
              <li>Worked with REST APIs, authentication & state management.</li>
              <li>Deployed applications using Vercel & GitHub Pages.</li>
            </ul>
          </div>

        </div>

        {/* -------- RIGHT COLUMN (Education) -------- */}
        <div className="edu-box">
          <h3 className="box-title">Education</h3>

          <div className="edu-item">
            <h4>Bachelor of Computer Applications (BCA)</h4>
            <span className="year">2022 – 2025</span>
            <p className="college">[Your College Name], Bangalore</p>
            <ul>
              <li>Focused on Web Development, Java, JavaScript & Data Structures.</li>
              <li>Built academic + personal full-stack projects.</li>
              <li>Participated in coding competitions & tech community events.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Experience;
