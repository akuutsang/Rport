import "./nav.css"
import { Link } from "react-router-dom"

import React from "react"

function Nav() {
  return (
    <div className="navSection">
        <div className="NavLeft">
          <div className="logo">Akutsang</div>
        </div>
        <div className="navRight">
            <Link className="home">Home</Link>
            <Link className="about">About</Link>
            <Link className="skills">Skills</Link>
            <Link className="contact">Contact</Link>
            <Link className="Resume">Resume</Link> 
            </div>
    </div>
  )
}

export default Nav