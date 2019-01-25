import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div class="container">
        <h1> Solo Projects </h1>
        <ul>
          <li>
            Vue Shopping Cart |{" "}
            <a
              href="https://github.com/JoshuaWalk/Vue-Shopping-Cart"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
 
          </li>
          <p>Empty Cart</p>
          <img
            src={require("../images/projects/shopping1.jpeg")}
            alt="me2"
            style={{ width: 650 }}
          />{" "}
          <br />
          <p>Products in Cart</p>
          <img
            src={require("../images/projects/shopping2.png")}
            alt="me2"
            style={{ width: 650 }}
          />{" "}
          <br />
          <p>
            {" "}
            This is a shopping cart project I made using Vue.js with Bootsrap to
            make it look more visually appealing. After reading through the Vuex
            documentation, I created an application that could successfully
            change the state of items from a list to a shopping cart.
          </p>
          <li>
            React Tic Tac Toe |{" "}
            <a
              href="https://github.com/JoshuaWalk/Tic-Tac-Toe"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            | <a href="https://tictacjosh.netlify.com/" target="_blank" rel="noopener noreferrer">
              Link
            </a>
          </li>
          <br />
          <p>Start of Game</p>
          <img
            src={require("../images/projects/ticTac1.png")}
            alt="me2"
            style={{ width: 450 }}
          />
          <br />
          <br />
          <p>End of Game</p>
          <img
            src={require("../images/projects/ticTac2.png")}
            alt="me2"
            style={{ width: 450 }}
          />
          <p>
            A tic tac toe application I made using 'React.js'. This game
            remembers move history and allows you to go back to any point and
            play from there. I also added css selectors that allow the game to
            change based on screen size to fit any device that accesses it{" "}
          </p>
        </ul>
        <h1> Group Projects </h1>
        <ul>
          <li>1280 THE ZONE</li>
          <p>
            Currently working on a redesign of the 1280 THE ZONE's website. I
            helped research WordPress plugins that have been used to improve the
            functionality of the website, currently we are waiting for more
            changes in the CSS before the redesign goes live.
          </p>
          <li>Stars App</li>
          <p>
            {" "}
            Another project I am currently working on. I am on a team creating
            an app for the Salt Lake Stars, a minor league basketball team. I am
            working on the API to connect the NBA's database to display payer
            stats.
          </p>
        </ul>
        {/* <h1> Open Source Projects</h1>
        <ul>
          <li> none </li>
        </ul> */}
      </div>
    );
  }
}

export default Projects;
