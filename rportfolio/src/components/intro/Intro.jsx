import React from "react";
import "./intro.css";
import Winnie from "../../images/me.png";

function Intro() {
  return (
    <div className="intro">
      <div className="introLeft">
        <div className="name-container">
          <p className="welcome">Hello! My name is</p>
          <h1 className="name"> Winnifred Kaze</h1>
          <div className="introTitle">
            <div className="introTitleContainer">
              <div className="introTitleItem">Web developer</div>
              <div className="introTitleItem">Writer</div>
              <div className="introTitleItem">Wife</div>
              <div className="introTitleItem">mother</div>
            </div>
          </div>
          <div className="introDescription">
            <p>
              {" "}
              I am a frontEnd developer, i design stylish, modern responsive{" "}
              <br /> websites for all types of customers, be it online store or
              any type of web services
            </p>
          </div>
        </div>
      </div>
      <div className="introRight">
        <div className="introBg"></div>
        <img src={Winnie} alt="" className="introImage" />
      </div>
    </div>
  );
}

export default Intro;
