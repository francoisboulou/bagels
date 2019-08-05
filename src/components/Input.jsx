import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      input: ""
    };
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateGuess(this.state.input);
    this.setState({
      input: ""
    });
  }

  render() {
    return (
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
    );
  }
}
