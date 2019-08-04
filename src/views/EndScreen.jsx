import React, { Component } from "react";
import "../index.css";

class EndScreen extends Component {
  endMessage() {
    let winLose = this.props.win ? "You Win!" : "You Lose";
    return (
      <div className="endScreen general">
        <h1>{winLose}</h1>
        <h2 onClick={this.props.PlayAgainCallback.bind(this)}>Play Again?</h2>
      </div>
    );
  }

  render() {
    return this.endMessage();
  }
}

export default EndScreen;
