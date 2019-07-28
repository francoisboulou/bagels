import React, { Component } from "react";
import EvaluateGuess from "../components/EvaluateGuess.jsx";
import Alert from "../components/Alert.jsx";
import life from "../assets/images/life.png";
import "../index.css";

class PlayScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      guess: 0,
      displayAlert: false,
      displayClues: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateGuess = this.updateGuess.bind(this);
    this.lifeCounter = this.lifeCounter.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
    this.handleAlertClick = this.handleAlertClick.bind(this);
  }

  componentDidMount() {
    document.getElementById("guessInput").focus();
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    function hasDups(number) {
      const numberArr = (number + "").split("").map(Number);
      return (
        numberArr[0] === numberArr[1] ||
        numberArr[0] === numberArr[2] ||
        numberArr[1] === numberArr[2]
      );
    }

    if (
      this.state.input.length === 3 &&
      Number.isInteger(Number(this.state.input)) &&
      !hasDups(Number(this.state.input))
    ) {
      this.setState(
        {
          guess: this.state.input,
          input: ""
        },
        () => {
          this.updateGuess();
        }
      );
    } else {
      this.setState(
        {
          displayAlert: true
        },
        function() {
          document.getElementById("alertButton").focus();
        }
      );
    }
  }

  handleAlertClick() {
    this.setState(
      {
        displayAlert: false
      },
      function() {
        document.getElementById("guessInput").focus();
      }
    );
  }

  updateGuess() {
    this.props.callbackFromParent(this.props.guesses - 1);
  }

  lifeCounter(guesses) {
    let lives = [];
    for (let i = 0; i < guesses; i++) {
      if (i > 4) {
        lives.push(guesses - 5);
        break;
      } else {
        lives.push(<img key={"key" + String(i)} src={life} alt="" />);
      }
    }
    return lives;
  }

  renderAlert() {
    if (this.state.displayAlert) {
      return (
        <Alert
          handleAlertClick={this.handleAlertClick}
          // handleAlertKeydown={this.handleAlertKeydown}
          handleAlertKeyup={this.handleAlertKeyup}
        />
      );
    }
  }

  render() {
    console.log("submit guess is rendering");
    console.log("guess: " + this.state.guess);

    return (
      <div className="playScreen">
        <div className="lifeCounter">
          {this.lifeCounter(this.props.guesses)}
        </div>
        <div className="controls">
          <p>guess the number</p>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <input
              id="guessInput"
              className="input"
              type="text"
              value={this.state.input}
              onChange={this.handleChange}
            />
          </form>
        </div>
        <EvaluateGuess
          guess={this.state.guess}
          randomNum={this.props.randomNum}
          winCallback={this.props.winCallback.bind(this)}
        />
        {this.renderAlert()}
      </div>
    );
  }
}

export default PlayScreen;
