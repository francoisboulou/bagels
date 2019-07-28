import React, { Component } from "react";
import bagel from "../images/bagel.png";
import fermi from "../images/fermi.png";
import pico from "../images/pico.png";
import "../index.css";

class EvaluateGuess extends Component {
  render() {
    let randomNum = [...String(this.props.randomNum)];
    let guess = [...String(this.props.guess)];
    let result = [];
    let resultStr = [];

    if (this.props.guess) {
      guess.forEach((digit, i) => {
        if (randomNum.includes(digit)) {
          if (digit === randomNum[i]) {
            result.push(<img className="clueImg" src={fermi} alt="" />);
            console.log("pushed fermi", i);
          } else {
            result.push(<img className="clueImg" src={pico} alt="" />);
            resultStr.push("pico");
            console.log("pushed pico", i);
          }
        }
      });

      if (!result.length) {
        result.push(<img className="clueImg" src={bagel} alt="" />);
      }

      if (result.length === 3 && !resultStr.includes("pico")) {
        this.props.winCallback();
      }
    }

    return <div id="clueImgArr">{result}</div>;
  }
}

export default EvaluateGuess;
