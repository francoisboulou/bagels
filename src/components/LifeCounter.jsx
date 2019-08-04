import React from "react";
import life from "../assets/images/life.png";

export function LifeCounter(props) {
  let lives = [];
  let guesses = props.guesses;
  for (let i = 0; i < guesses; i++) {
    if (i > 4) {
      lives.push(guesses - 5);
      break;
    } else {
      lives.push(<img key={"key" + String(i)} src={life} alt="heart" />);
    }
  }
  return <div className="lifeCounter">{lives}</div>;
}
