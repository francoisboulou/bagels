import React, { Component } from 'react';
import StartScreen from './views/StartScreen.jsx'
import PlayScreen from './views/PlayScreen.jsx'
import EndScreen from './views/EndScreen.jsx'
import axios from 'axios' 
import './index.css'


class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      randomNum: 0,
      instructions: true,
      win: false,
      guesses: 15
    }

    this.getRandomNum = this.getRandomNum.bind(this)

  }

  componentDidMount() {
    console.log('---componentDidMount---')
    this.getRandomNum()
    console.log(this.state.randomNum)

  }

  getRandomNum() {
    axios.get('https://www.random.org/integers/?num=1&min=100&max=999&col=1&base=10&format=plain')
    .then((response) => {
      this.setState({
      randomNum: response.data
    })})
  }
  
  winCallback() {
    this.setState({
      win: true
    })
  }

  guessCallback(guessesLeft) {
    this.setState({
      guesses: guessesLeft
    })
  }

  difficultyCallback(chosenDifficulty) {
    if (chosenDifficulty === "Easy") {
      console.log("chose easy");
            
      this.setState({
        guesses: 15
      })
    }

    if (chosenDifficulty === "Medium") {
      console.log("chose medium");
      
      this.setState({
        guesses: 10
      })
    }
    if (chosenDifficulty === "Hard") {
      console.log("chose hard");
      
      this.setState({
        guesses: 5
      })
    }
    console.log("guesses:  " + this.state.guesses)
  }

  instructionsCallback(instrBool) {
    this.setState({
      instructions: false
    })
  }

  PlayAgainCallback() {
    this.setState({
      instructions: true,
      guesses: 15,
      win: false,
      randomNum: 0
    }, () => {this.getRandomNum()}) 
  }

  render() {
    console.log(this.state.randomNum)
    if (this.state.instructions === true) {

      return (
        <StartScreen 
        callbackFromParent= {this.difficultyCallback.bind(this)} 
        instructionsCallback = {this.instructionsCallback.bind(this)}
        />
      )
    }
    
    if (this.state.guesses === 0 || this.state.win === true) {
      return (
        <EndScreen
        PlayAgainCallback = {this.PlayAgainCallback.bind(this)}
        win = {this.state.win}
        />
      )
    }

    return (
        <PlayScreen
        randomNum = {this.state.randomNum}
        guesses = {this.state.guesses}
        callbackFromParent={this.guessCallback.bind(this)}
        winCallback = {this.winCallback.bind(this)} 
        />
    )
  }
}

export default App;
