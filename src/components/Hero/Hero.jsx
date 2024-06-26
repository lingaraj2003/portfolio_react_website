import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from "../../assets/profile_img.svg";

function Hero() {
  return (
    <div id="home" className="hero">
      <img src={profile_img} />
      <h1>
        <span>I'm Lingaraj</span>,MERN full stack developer.
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        laboriosam illo alias atque! Debitis rem recusandae voluptatem accusamus
        maiores labore dolores.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
