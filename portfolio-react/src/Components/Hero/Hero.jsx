import React from 'react'
import './Hero.css'
import profile_img from '../../assets/photo-d.svg'
const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" style={{ width: "300px", height: "300px" }} />

        <h1><span>I’m Nurudeen Durowade, </span>  A DevOps and Full-Stack Engineer. </h1>
        <p>I am passionate about delivering scalable, efficient, and innovative solutions. With expertise in modern DevOps practices and full-stack development, 
        I bridge the gap between development and operations to create seamless, high-performing systems.</p>
      <div className="hero-action">
        <div className="hero-connect">
            Connect with me
        </div>
        <div className="hero-resume">
            My resume
        </div>
      </div>
    </div>
  )
}

export default Hero
