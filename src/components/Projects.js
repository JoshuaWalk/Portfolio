import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div class="container">
        <h1> Solo Projects </h1>
        <ul >
          <li>
            Vue Shopping Cart | {" "}
            <a
              href="https://github.com/JoshuaWalk/Vue-Shopping-Cart"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            | Link(when hosted)
          </li>
          <li>
            React Tic Tac Toe |{" "}
            <a
              href="https://github.com/JoshuaWalk/Tic-Tac-Toe"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            | Link (when hosted)
          </li>
        </ul>
        <h1> Group Projects </h1>
            <ul>
                <li>1280 THE ZONE</li>
                <li>Stars App</li>
            </ul>
        <h1> Open Source Projects</h1>
            <ul>
                <li> none </li>
            </ul>
      </div>
    );
  }
}

export default Projects;
