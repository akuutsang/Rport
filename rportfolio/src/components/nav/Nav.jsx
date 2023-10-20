import "./nav.css";
import React from "react";
import { Component } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Shared } from "../../pages/shared/Shared";
// import About from "../about/About";
// import SkillsList from "../skillsList/SkillsList";
// import Contact from "../contact/Contact";
// import Intro from "../intro/Intro";

export default function Nav() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <nav className="navSection">
        <div className="NavLeft">
          <div className="logo">Akutsang</div>
        </div>
        <div className="navRight">
          <ul id="navbar" className={clicked ? ".navbar active" : ".navbar"}>
            <li>
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link to="about">About</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="products">Products</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>

            <li>
              <Link to={"/Shared"}>Resume</Link>{" "}
              {/* Link to the Resume route */}
            </li>
          </ul>
        </div>
        <div className="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
}
