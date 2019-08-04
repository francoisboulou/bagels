import React, { Component } from "react";
import EvaluateGuess from "../components/EvaluateGuess.jsx";
import { LifeCounter } from "../components/LifeCounter.jsx";
import Input from "../components/Input.jsx";
import "../index.css";

class PlayScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guess: ""
    };

    this.updateGuess = this.updateGuess.bind(this);
  }

  componentDidMount() {
    document.getElementById("guessInput").focus();
    // console.log(this.props.randomNum);
  }

  updateLives() {
    this.props.updateLives(this.props.guesses - 1);
  }

  updateGuess(guess) {
    this.setState({
      guess: guess
    });
  }

  render() {
    return (
      <div className="playScreen">
        <LifeCounter guesses={this.props.guesses} />
        <Input updateGuess={this.updateGuess} />
        <EvaluateGuess
          guess={this.state.guess}
          randNum={this.props.randNum}
          winCallback={this.props.winCallback.bind(this)}
        />
      </div>
    );
  }
}

export default PlayScreen;
