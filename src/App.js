import React, { Component } from "react";
import StartScreen from "./views/StartScreen.jsx";
import PlayScreen from "./views/PlayScreen.jsx";
import EndScreen from "./views/EndScreen.jsx";
import Music from "./components/Music.jsx";
import axios from "axios";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randNum: 0,
      instructions: true,
      win: false,
      lives: 15
    };

    this.getRandomNum = this.getRandomNum.bind(this);
    this.renderScreen = this.renderScreen.bind(this);
    this.winCallback = this.winCallback.bind(this);
    this.updateLives = this.updateLives.bind(this);
    this.difficultyCallback = this.difficultyCallback.bind(this);
    this.instructionsCallback = this.instructionsCallback.bind(this);
    this.playAgainCallback = this.playAgainCallback.bind(this);
  }

  componentDidMount() {
    this.getRandomNum();
  }

  componentDidUpdate() {
    console.log(this.state.randNum, this.state.lives);
  }

  getRandomNum() {
    function hasDups(numberStr) {
      return (
        numberStr[0] === numberStr[1] ||
        numberStr[0] === numberStr[2] ||
        numberStr[1] === numberStr[2]
      );
    }

    axios
      .get(
        "https://www.random.org/integers/?num=1&min=100&max=999&col=1&base=10&format=plain"
      )
      .then(response => {
        let responseStr = response.data + "";
        let hasDupsVar = hasDups(responseStr);

        while (hasDupsVar === true) {
          responseStr = Number(responseStr) + 1 + "";
          hasDupsVar = hasDups(responseStr);
        }

        this.setState({
          randNum: responseStr
        });
      });
  }

  winCallback() {
    this.setState({
      win: true
    });
  }

  updateLives() {
    const livesLeft = this.state.lives - 1;
    this.setState({
      lives: livesLeft
    });
  }

  difficultyCallback(chosenDifficulty) {
    if (chosenDifficulty === "Easy") {
      this.setState({
        lives: 15
      });
    }

    if (chosenDifficulty === "Medium") {
      this.setState({
        lives: 10
      });
    }
    if (chosenDifficulty === "Hard") {
      this.setState({
        lives: 5
      });
    }
  }

  instructionsCallback() {
    this.setState({
      instructions: false
    });
  }

  playAgainCallback() {
    this.setState(
      {
        instructions: true,
        lives: 15,
        win: false,
        randomNum: 0
      },
      () => {
        this.getRandomNum();
      }
    );
  }

  renderScreen() {
    if (this.state.instructions === true) {
      return (
        <StartScreen
          callbackFromParent={this.difficultyCallback}
          instructionsCallback={this.instructionsCallback}
        />
      );
    } else if (this.state.lives === 0 || this.state.win === true) {
      return (
        <EndScreen
          PlayAgainCallback={this.playAgainCallback}
          win={this.state.win}
        />
      );
    } else {
      return (
        <PlayScreen
          randNum={this.state.randNum}
          lives={this.state.lives}
          updateLives={this.updateLives}
          winCallback={this.winCallback}
        />
      );
    }
  }

  render() {
    return (
      <div>
        <Music />
        {this.renderScreen()}
      </div>
    );
  }
}

export default App;
