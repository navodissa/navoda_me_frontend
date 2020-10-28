import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
//import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <h1>Navoda's Digest</h1>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse text-right" id="basicExampleNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a className="nav-link" href="/">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
