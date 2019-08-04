import React, { Component } from "react";
import StartScreen from "./views/StartScreen.jsx";
import PlayScreen from "./views/PlayScreen.jsx";
import EndScreen from "./views/EndScreen.jsx";
import axios from "axios";
import "./index.css";
import notMegamanUnfortunately from "./assets/audio/watermusic_II.mp3";
import silence from "./assets/audio/silence.mp3";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randNum: 0,
      instructions: true,
      win: false,
      guesses: 15,
      music: notMegamanUnfortunately,
      silence: silence,
      musicPaused: false
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

  updateLives(livesLeft) {
    this.setState({
      guesses: livesLeft
    });
  }

  difficultyCallback(chosenDifficulty) {
    if (chosenDifficulty === "Easy") {
      this.setState({
        guesses: 15
      });
    }

    if (chosenDifficulty === "Medium") {
      this.setState({
        guesses: 10
      });
    }
    if (chosenDifficulty === "Hard") {
      this.setState({
        guesses: 5
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
        guesses: 15,
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
    } else if (this.state.guesses === 0 || this.state.win === true) {
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
          guesses={this.state.guesses}
          updateLives={this.updateLives}
          winCallback={this.winCallback}
        />
      );
    }
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100vh" }}>
        <iframe
          title="fakey"
          src={this.state.silence}
          allow="autoplay"
          id="audio"
          style={{ display: "none" }}
        ></iframe>
        <audio id="strtMusic" ref="audio_tag" src={this.state.music} autoPlay />
        <p
          onClick={() => {
            if (this.state.musicPaused === false) {
              document.getElementById("strtMusic").pause();
              this.setState({
                musicPaused: true
              });
            } else {
              document.getElementById("strtMusic").play();
              this.setState({
                musicPaused: false
              });
            }
          }}
          style={{
            fontSize: "45px",
            color: "#FF69B4",
            fontFamily: '"Press Start 2P", cursive',
            fontStyle: "italic",
            textShadow: "2px 2px #ff0000",
            position: "absolute",
            bottom: "2.5%",
            right: "2.5%",
            cursor: "pointer"
          }}
        >
          ||
        </p>

        {this.renderScreen()}
      </div>
    );
  }
}

export default App;
