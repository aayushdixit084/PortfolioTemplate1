import React from "react";
import "./About.css"
import profilePic from "../assets/profile-pic.jpg"; // Ensure you have a profile picture in the specified path
function About() {
  return (
    <section id="about" className="section about">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <div className="about-body">
          <img
            src={profilePic}
            alt="Your portrait"
            className="profile-pic"
          />
          <p className="about-text">
            I’m <span className="highlight">Aayush Dixit</span>, a passionate
            writer exploring themes of <em>love, loneliness, and human
            connection</em>. I enjoy creating stories that not only entertain,
            but also leave readers with something to carry forward. My words aim
            to echo long after the page is turned.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
