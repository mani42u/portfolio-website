import React from "react";
import profile_large from "../../assets/profile_large.png";
import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-container">

        {/* LEFT SIDE IMAGE */}
        <div className="about-left">
          <div className="about-img-wrapper">
            <img src={profile_large} alt="Profile" className="about-img" />
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="about-right">

          <h2 className="about-tagline">Frontend Developer • Problem Solver</h2>

          <div className="about-para">
            <p>
              I am a recent BCA graduate (2025) with a strong passion for frontend
              development and building clean, responsive and user-focused web 
              applications. I enjoy working with modern technologies like 
              JavaScript, React, Next.js, and Tailwind CSS to bring ideas to life.
            </p>

            <p>
              I’ve built real projects such as a To-Do App, Weather App, 
              a Spring Boot-based Food Delivery App, and a MERN Agent Management 
              panel. These projects helped me strengthen my UI development, 
              problem-solving skills, and understanding of practical workflows.
            </p>

            <p>
              I’m currently seeking a Frontend Developer internship or entry-level 
              role where I can apply my skills, learn from mentors, and contribute 
              to building meaningful digital products.
            </p>
          </div>

          {/* SKILL BARS */}
          <div className="skills-section">
            <h3>My Skills</h3>

            <div className="skill-bar">
              <span>HTML & CSS</span>
              <div className="skill-progress"><div style={{ width: "90%" }}></div></div>
            </div>

            <div className="skill-bar">
              <span>JavaScript</span>
              <div className="skill-progress"><div style={{ width: "75%" }}></div></div>
            </div>

            <div className="skill-bar">
              <span>React JS</span>
              <div className="skill-progress"><div style={{ width: "70%" }}></div></div>
            </div>

            <div className="skill-bar">
              <span>Next JS</span>
              <div className="skill-progress"><div style={{ width: "60%" }}></div></div>
            </div>

            <div className="skill-bar">
              <span>Tailwind CSS</span>
              <div className="skill-progress"><div style={{ width: "80%" }}></div></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
