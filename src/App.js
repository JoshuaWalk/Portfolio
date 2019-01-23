import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import  Routing  from "./Route";

class App extends Component {
  render() {
    return (
        <div>
        
        <NavBar/>
        <Routing />
        </div>
    );
  }
}

export default App