import React, { Component } from "react";
import "../index.css";

class EndScreen extends Component {
  componentDidMount() {}

  render() {
    if (this.props.win === true) {
      return (
        <div className="endScreen general">
          <h1>You Win!</h1>
          <h2 onClick={this.props.PlayAgainCallback.bind(this)}>Play Again?</h2>
        </div>
      );
    } else {
      return (
        <div className="endScreen general">
          <h1>You Lose</h1>
          <h2 onClick={this.props.PlayAgainCallback.bind(this)}>Play Again?</h2>
        </div>
      );
    }
  }
}

export default EndScreen;
