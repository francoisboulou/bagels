import React, { Component } from 'react';
import StartScreen from './views/StartScreen.jsx'
import PlayScreen from './views/PlayScreen.jsx'
import EndScreen from './views/EndScreen.jsx'
import axios from 'axios' 
import './index.css'
import notMegamanUnfortunately from './audio/watermusic_II.mp3'
import silence from './audio/silence.mp3'


class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      randomNum: 0,
      instructions: true,
      win: false,
      guesses: 15,
      music : notMegamanUnfortunately,
      silence : silence,
      musicPaused: false,
    }

    this.getRandomNum = this.getRandomNum.bind(this)
    this.renderScreen = this.renderScreen.bind(this)

  }

  componentDidMount() {
    console.log('---componentDidMount---')
    this.getRandomNum()
    console.log(this.state.randomNum)

  }

  getRandomNum() {

    function hasDups(numberStr) {
      return numberStr[0] === numberStr[1] || numberStr[0] === numberStr[2] || numberStr[1] === numberStr[2]  
    }

    axios.get('https://www.random.org/integers/?num=1&min=100&max=999&col=1&base=10&format=plain')
    .then((response) => {
      let responseStr = response.data+''
      let hasDupss = !hasDups(responseStr) ? false : true
      console.log(hasDupss);
      console.log(response.data +1);
      
      while(hasDupss === true) {
        responseStr = ((Number(responseStr) + 1) + '')
        if (!hasDups(responseStr)) {
          hasDupss = false
        }
      }
      this.setState({
      randomNum: Number(responseStr)
      })  
    })    
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

  instructionsCallback() {
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

  renderScreen() {
    if (this.state.instructions === true) {
      return (
        <StartScreen 
        callbackFromParent= {this.difficultyCallback.bind(this)} 
        instructionsCallback = {this.instructionsCallback.bind(this)}
        />
      )
    } else if (this.state.guesses === 0 || this.state.win === true) {
      return (
        <EndScreen
        PlayAgainCallback = {this.PlayAgainCallback.bind(this)}
        win = {this.state.win}
        />
      )
    } else {
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

  render() {
    console.log(this.state.randomNum)
    return (
      <div style={{width: '100%', height: '100vh'}}>
        <iframe title="fakey" src={this.state.silence} allow="autoplay" id="audio" style={{display:"none"}}></iframe>
        <audio id="strtMusic" ref="audio_tag" src={this.state.music} autoPlay/>
        <p onClick={() => {
                    if (this.state.musicPaused === false) {
                        document.getElementById('strtMusic').pause()
                        this.setState({
                            musicPaused: true,
                        }) 
                    }
                    else {
                        document.getElementById('strtMusic').play()
                        this.setState({
                            musicPaused: false,
                        })
                    }}}
                    style={{
                      fontSize: "45px",
                      color: '#FF69B4',
                      fontFamily:'"Press Start 2P", cursive',
                      fontStyle: 'italic',
                      textShadow: '2px 2px #ff0000', 
                      position: "absolute", 
                      bottom:"2.5%", 
                      right:"2.5%", 
                      cursor: 'pointer'}}>||
        </p>

        {this.renderScreen()}
      
      </div>
    ) 
  }
}

export default App;
