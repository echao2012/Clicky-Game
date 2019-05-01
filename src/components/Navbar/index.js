import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <ul className="navbar-nav">
        <li><a className="navbar-brand" href="/">Memory Game</a></li>
        <li className="nav-item">{props.status}</li>
        <li className="nav-item">Score: {props.score} | Top Score: {props.topScore}</li>
      </ul>
    </nav>
  )
}

export default Navbar;
