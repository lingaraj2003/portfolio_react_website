import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo
              vel, modi deleniti dolor dignissimos, nihil laboriosam vitae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              laboriosam nulla, officiis officia sapiente tempore, quae hic
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skil">
              <p>HTML & css</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skil">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skil">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skil">
              <p>Node JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Fresher</h1>
          <p>MERN full stack developer</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
