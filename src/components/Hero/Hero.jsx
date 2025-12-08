import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="profile" className="hero-img" />

      <h1 className="hero-title">
        I'm <span>Manibhushan Kumar</span>, Frontend Developer based in India
      </h1>

      <p className="hero-desc">
        I am a Frontend Developer from Bangalore with 2 years of experience.
      </p>

      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
