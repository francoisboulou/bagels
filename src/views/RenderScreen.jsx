// import React, { Component } from "react";
// import StartScreen from "./StartScreen";
// import PlayScreen from "./PlayScreen";
// import EndScreen from "./EndScreen";

// export default class RenderScreen extends Component {
//   render() {
//     if (this.state.instructions === true) {
//       return (
//         <StartScreen
//           callbackFromParent={this.difficultyCallback.bind(this)}
//           instructionsCallback={this.instructionsCallback.bind(this)}
//         />
//       );
//     } else if (this.state.guesses === 0 || this.state.win === true) {
//       return (
//         <EndScreen
//           PlayAgainCallback={this.PlayAgainCallback.bind(this)}
//           win={this.state.win}
//         />
//       );
//     } else {
//       return (
//         <PlayScreen
//           randomNum={this.state.randomNum}
//           guesses={this.state.guesses}
//           callbackFromParent={this.guessCallback.bind(this)}
//           winCallback={this.winCallback.bind(this)}
//         />
//       );
//     }
//   }
// }
