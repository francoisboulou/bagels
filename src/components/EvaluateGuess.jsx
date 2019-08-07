import React, { Component } from "react";
import hasDups from "../utils/hasDups";
import "../index.css";

class EvaluateGuess extends Component {
  constructor(props) {
    super(props);

    this.validGuess = this.validGuess.bind(this);
    this.returnClues = this.returnClues.bind(this);
    this.popResult = this.popResult.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.guess === nextProps.guess) {
      return false;
    } else {
      this.result = [];
      this.pico = false;
      return true;
    }
  }

  validGuess(guess) {
    const guessLen = guess.length === 3;
    const isNum = Number.isInteger(Number(guess));

    return guessLen && isNum && !hasDups(Number(guess));
  }

  returnClues(guess, randNum) {
    guess.forEach((digit, i) => {
      if (randNum.includes(digit)) {
        if (digit === randNum[i]) {
          this.result.push(
            <p className="clue" key={"clue" + String(i)}>
              Fermi
            </p>
          );
        } else {
          this.result.push(
            <p className="clue" key={"clue" + String(i)}>
              Pico
            </p>
          );
          this.pico = true;
        }
      }
    });

    if (!this.result.length) {
      this.result.push(
        <p className="clue" key={"bagel"}>
          Bagel
        </p>
      );
    }

    if (this.result.length === 3 && !this.pico) {
      this.props.winCallback();
    }
  }

  popResult() {
    if (this.props.guess.length) {
      if (this.validGuess(this.props.guess)) {
        this.props.updateLives();
        this.returnClues([...this.props.guess], [...(this.props.randNum + "")]);
      } else {
        this.result.push(
          <p className="alert" key="nope">
            guess must be 3 numbers
            <br />
            and no duplicates butch!
          </p>
        );
      }
    }

    return this.result;
  }

  render() {
    return <div id="clueArr">{this.popResult()}</div>;
  }
}

export default EvaluateGuess;
