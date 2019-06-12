import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div class="fluid-container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            Joshua Walker
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="/about">
                About Me <span class="sr-only">(current)</span>
              </a>
              <a class="nav-item nav-link" href="/projects">
                Projects
              </a>
              <a class="nav-item nav-link" href="/info">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavBar