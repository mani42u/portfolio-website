import React from "react";
import "./Hero.css";
import profile_small from "../../assets/profile_small.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_small} alt="profile" className="hero-img" />

      <h1 className="hero-title">
        Hi, I'm <span>Manibhushan Kumar</span>, Front-end Developer based in India
      </h1>

      <p className="hero-desc">
       Passionate about crafting clean, modern and
        responsive web experiences. Let's create something amazing together!
        
      </p>

      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
