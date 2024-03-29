import React, { Component } from "react";
import { Instructions } from "../components/Instructions";
import Dropdown from "../components/Dropdown";
import "../index.css";

class StartScreen extends Component {
  constructor() {
    super();

    this.state = {};

    this.openOverlay = this.openOverlay.bind(this);
  }

  componentDidMount() {
    setTimeout(
      () => (document.querySelector(".menu").style.display = "flex"),
      6500
    );
  }

  openOverlay() {
    document.getElementById("instOverlay").style.display = "block";
  }

  render() {
    return (
      <div className="startScreen">
        <h1 className="title">BAGELS!</h1>
        <div className="menu">
          <Instructions />
          <h2 className="menuItem" onClick={this.openOverlay}>
            Instructions
          </h2>
          <Dropdown
            difficultyCallback={this.props.difficultyCallback.bind(this)}
          />
          <h2
            className="menuItem"
            onClick={this.props.startScreenCallback.bind(this)}
          >
            Start Game
          </h2>
        </div>
      </div>
    );
  }
}

export default StartScreen;
