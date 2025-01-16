import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

import profile_img from "../../assets/photo-d.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            src={profile_img}
            alt=""
            style={{ width: "500px", height: "500px" }}
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced DevOps Engineer with 2 years of professional
              expertise, seamlessly combining development and operations to
              deliver efficient and scalable solutions. I have had the privilege
              of working on both frontend and backend development using
              technologies like React for building dynamic user interfaces,
              Python for backend scripting, and C# with ASP.NET Web API and MVC
              for creating robust web applications{" "}
            </p>

            <p>
              {" "}
              In addition to my development skills, I bring a strong command of
              DevOps technologies, including Kubernetes for container
              orchestration, Docker for containerization, Git for version
              control, Azure DevOps for CI/CD pipelines, and Prometheus for
              monitoring and performance analysis. My versatile experience
              equips me to optimize workflows, enhance system reliability, and
              drive innovation across the software delivery lifecycle.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Microservices </p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Kubernetes</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Docker</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p> Azure</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Bash</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Git </p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>ASP.NET</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>Frontend</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
