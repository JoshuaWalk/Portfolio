import React, { Component } from "react";

class Me extends Component {
  render() {
    return (
      <div class="container">
        <h1> a little bit about me...</h1>

        <div class="container">
          <p>
            My name is Joshua Walker. I am 21 years old, and have a passion for
            programming.
            <br />
            My first real experience with programming came in October of 2018
            when I attended Helio Training, a web development boot camp that
            specialized in React.js. I attended the fully immersive course which
            was 9 to 5 for 13 weeks. Being thrown in the deep end allowed me to
            learn more quickly than I ever have. Helio helped me learn how to
            code, but most importantly it helped me learn how to learn. I have
            learned how to ask the right questions, to read the documentation,
            and to complete projects.
            <br />
            Since learning to code I have really enjoyed going through lessons
            and tutorials of technologies that are new to me. I also love doing
            coding challenges on websites like codewars.com. I have also been
            able to participate in real world projects at Helio. I have been
            working with my class on a redesign of 1280 THE ZONE's website. I am
            currently on a team making a mobile application for the Salt Lake
            Stars, a team in the NBA G League.
          </p>
        </div>
        <img
          src={require("../images/me/me1.jpg")}
          alt="me2"
          style={{ width: 200 }}
        />
        <img
          src={require("../images/me/family.jpg")}
          alt="me2"
          style={{ width: 450 }}
          align="right"
        />
      </div>
    );
  }
}

export default Me;
