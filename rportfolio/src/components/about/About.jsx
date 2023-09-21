import "./About.css";
import me from "../../images/blackTheme.jpeg"

import React from 'react'

function About() {
  return (
    <div className="About">
      <div className="About-left">
        <div className="About-card bg"></div>
        <div className="About-card">
          <img
            src={me}
            alt=""
            className="About-img"
          />
        </div>
      </div>
      <div className="About-right">
        <p className="AboutSubTitle"> <span className="firstSpan">Feels really good to have you here!</span><br /> You know that feeling you get? <br /> when you write a bunch of code and create something beautiful?<br /> Isn't that the most satifying feeling in the world? <br /> <span className="SecondSpan">I am just a girl who loves to create beautiful websites</span></p>
      </div>
    </div>

  )
}

export default About

