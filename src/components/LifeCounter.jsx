import React from "react";
import life from "../assets/images/life.png";

export function LifeCounter(props) {
  let livesCounter = [];
  let propLives = props.lives;
  for (let i = 0; i < propLives; i++) {
    if (i > 4) {
      livesCounter.push(propLives - 5);
      break;
    } else {
      livesCounter.push(<img key={"key" + String(i)} src={life} alt="heart" />);
    }
  }
  return <div className="lifeCounter">{livesCounter}</div>;
}
