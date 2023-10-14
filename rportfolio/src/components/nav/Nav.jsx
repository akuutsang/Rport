import "./nav.css";
import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
// import About from "../about/About";
// import SkillsList from "../skillsList/SkillsList";
// import Contact from "../contact/Contact";
// import Intro from "../intro/Intro";

class Nav extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav className="navSection">
          <div className="NavLeft">
            <div className="logo">Akutsang</div>
          </div>
          <div className="navRight">
            <ul
              id="navbar"
              className={this.state.clicked ? ".navbar active" : ".navbar"}
            >
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
                <Link to="resume">Resume</Link>
              </li>
            </ul>
          </div>
          <div className="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
