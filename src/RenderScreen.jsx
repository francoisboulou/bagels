import React from "react";
import StartScreen from "./views/StartScreen.jsx";
import PlayScreen from "./views/PlayScreen.jsx";
import EndScreen from "./views/EndScreen.jsx";

export default function RenderScreen(props) {
  if (props.startScreen === true) {
    return (
      <StartScreen
        difficultyCallback={props.difficultyCallback}
        startScreenCallback={props.startScreenCallback}
      />
    );
  } else if (props.lives === 0 || props.win === true) {
    return (
      <EndScreen playAgainCallback={props.playAgainCallback} win={props.win} />
    );
  } else {
    return (
      <PlayScreen
        randNum={props.randNum}
        lives={props.lives}
        updateLives={props.updateLives}
        winCallback={props.winCallback}
      />
    );
  }
}
