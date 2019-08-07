import React, { Component } from "react";
import StartScreen from "./views/StartScreen.jsx";
import PlayScreen from "./views/PlayScreen.jsx";
import EndScreen from "./views/EndScreen.jsx";
import Music from "./components/Music.jsx";
import axios from "axios";
import hasDups from "./utils/hasDups.js";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randNum: 0,
      startScreen: true,
      win: false,
      lives: 15
    };

    this.getRandomNum = this.getRandomNum.bind(this);
    this.renderScreen = this.renderScreen.bind(this);
    this.updateLives = this.updateLives.bind(this);
    this.winCallback = this.winCallback.bind(this);
    this.difficultyCallback = this.difficultyCallback.bind(this);
    this.startScreenCallback = this.startScreenCallback.bind(this);
    this.playAgainCallback = this.playAgainCallback.bind(this);
  }

  componentDidMount() {
    this.getRandomNum();
  }

  getRandomNum() {
    axios
      .get(
        "https://www.random.org/integers/?num=1&min=100&max=999&col=1&base=10&format=plain"
      )
      .then(response => {
        let randNum = response.data;
        let hasDupsVar = hasDups(randNum);

        while (hasDupsVar === true) {
          randNum = Number(randNum) + 1 + "";
          hasDupsVar = hasDups(randNum);
        }

        this.setState({
          randNum: randNum
        });
      });
  }

  updateLives() {
    const livesLeft = this.state.lives - 1;
    this.setState({
      lives: livesLeft
    });
  }

  winCallback() {
    this.setState({
      win: true
    });
  }

  difficultyCallback(chosenDifficulty) {
    console.log(chosenDifficulty);

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
        lives: 15
      });
    }
  }

  startScreenCallback() {
    this.setState({
      startScreen: false
    });
  }

  playAgainCallback() {
    this.setState(
      {
        startScreen: true,
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
    if (this.state.startScreen === true) {
      return (
        <StartScreen
          difficultyCallback={this.difficultyCallback}
          startScreenCallback={this.startScreenCallback}
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
