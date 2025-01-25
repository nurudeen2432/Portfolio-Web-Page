import React from 'react'
import './Hero.css'
import profile_img from '../../assets/photo-d.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {

  const downloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the path to your resume file
    link.href = '/Nurudeen_Updated_Resume.pdf'; 
    link.download = 'Nurudeen_Durowade_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" style={{ width: "300px", height: "300px" }} />

        <h1><span>I’m Nurudeen Durowade, </span>  A DevOps and Full-Stack Engineer. </h1>
        <p>I am passionate about delivering scalable, efficient, and innovative solutions. With expertise in modern DevOps practices and full-stack development, 
        I bridge the gap between development and operations to create seamless, high-performing systems.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
            
        </div>
        <div className="hero-resume"
         onClick={downloadResume}
         style={{ cursor: 'pointer' }}
        >
            My resume
        </div>
      </div>
    </div>
  )
}

export default Hero
