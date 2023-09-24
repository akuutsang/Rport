import "./nav.css"
import React from "react"
import { Component } from "react";


class Nav extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({clicked : !this.state.clicked})
  }  
 render(){
  return (
    <>
      <nav className="navSection" >
          <div className="NavLeft">
            <div className="logo">Akutsang</div>
          </div>
          <div className="navRight">
              <ul id="navbar" className={this.state.clicked ? ".navbar active" : ".navbar"}>
                <li><a className="active" href="index.html">Home</a></li>
                <li><a href="index.html">About</a></li>
                <li><a href="index.html">Skills</a></li>
                <li><a href="index.html">Contact</a></li>
                <li><a href="index.html">Resume</a></li>
              </ul>
          </div>
          <div className="mobile" onClick={this.handleClick}>
            <i 
            id="bar"
            className={this.state.clicked ? 
              "fas fa-times" : 
              "fas fa-bars"}
            ></i>
          </div>
      </nav>
    </>
  )
    
    
}
}
 



export default Nav