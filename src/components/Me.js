import React, { Component } from "react";

class Me extends Component {
  render() {
    return (
      <div class="page">

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
