import music from "../assets/audio/watermusic_II.mp3";
import silence from "../assets/audio/silence.mp3";
import React, { Component } from "react";

export default class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      musicPaused: false
    };
  }
  render() {
    return (
      <div>
        <iframe
          title="fakey"
          src={silence}
          allow="autoplay"
          id="audio"
          style={{ display: "none" }}
        ></iframe>
        <audio id="strtMusic" ref="audio_tag" src={music} autoPlay />
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
      </div>
    );
  }
}
