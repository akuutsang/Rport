import "./nav.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <nav className="navSection">
        <Link className="NavLeft" to="/fullpage">
          <div className="logo">Akutsang</div>
        </Link>
        <div className="navRight">
          <ul id="navbar" className={clicked ? ".navbar active" : ".navbar"}>
            <li>
              <Link className="active" to="/fullpage">
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
