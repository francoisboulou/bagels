import React from "react";
import pico from "../assets/images/pico.png";
import fermi from "../assets/images/fermi.png";
import bagel from "../assets/images/bagel.png";
import "../index.css";

export function Instructions() {
  return (
    <div id="instOverlay">
      <p
        className="instClose"
        onClick={() => {
          document.getElementById("instOverlay").style.display = "none";
        }}
      >
        X
      </p>
      <div className="instructionsText">
        <p>I will think of a three digit number.</p>
        <p>
          You will try to guess the number, and I will respond to each guess as
          follows:
        </p>
        <br />
        <p>If the guess has no digits correct: Bagel</p>
        <p>For each correct digit in the wrong place: Pico</p>
        <p>For each correct digit in the correct place: Fermi</p>
      </div>
    </div>
  );
}
