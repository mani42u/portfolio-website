import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import profile_small from "../../assets/profile_small.jpg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <img src={profile_small} alt="profile" className="hero-img" />

      <h1 className="hero-title">
        Hi, I'm <span>Manibhushan Kumar</span>, Front-end Developer based in
        India
      </h1>

      <p className="hero-desc">
        Passionate about crafting clean, modern and responsive web experiences.
        Let's create something amazing together!
      </p>

      <div className="hero-action">
        <div className="hero-connect" onClick={() => navigate("/contact")}>
          Connect with me
        </div>
        <div className="hero-resume">
          
          <a
            href="/MANIBHUSHAN-KUMAR.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
