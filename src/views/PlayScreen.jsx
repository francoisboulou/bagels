import React, { Component } from 'react'
import { EvaluateGuess } from '../components/EvaluateGuess.jsx'
import { Alert } from '../components/Alert.jsx'
import life from '../images/life.png'
import '../index.css'

class PlayScreen extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            input : '',
            guess: 0,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateGuess = this.updateGuess.bind(this)
        this.lifeCounter = this.lifeCounter.bind(this)
    }

    componentDidMount () {
        document.getElementById('guessInput').focus();
          
          
    }

    handleChange(e) {
        this.setState({input: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()

        function hasDups (number) {
            const numberArr = (number+"").split("").map(Number) 
            return numberArr[0] === numberArr[1] || numberArr[0] === numberArr[2] || numberArr[1] === numberArr[2]  
          }

        if (this.state.input.length === 3 && Number.isInteger(Number(this.state.input)) && !hasDups(Number(this.state.input))) {
            this.setState({
                    guess: this.state.input,
                    input: '',  
                }, () => {this.updateGuess()})
        }
        else {
            document.getElementById('alertCont').style.display = 'flex'
            document.getElementById('guessInput').blur();
        }
    }
  
    updateGuess() {
        this.props.callbackFromParent((this.props.guesses - 1)) 
    }

    lifeCounter(guesses) {
        let lives = []
        for (let i = 0; i < guesses; i++) {
            if (i > 4) {
                lives.push(guesses - 5)
                break
            }
            else {
                lives.push(<img src={life} alt=""/>)
            }
        }
        return lives
    }

    render() {
        console.log("submit guess is rendering")
        console.log("guess: " + this.state.guess);
                
        return (
            <div className='playScreen'>
                <Alert />
                <div className='lifeCounter'>{this.lifeCounter(this.props.guesses)}</div>
                <div className='controls'>
                    <p>guess the number</p>
                    <form onSubmit={this.handleSubmit}>
                        <input id='guessInput' className='input'
                        type='text'
                        value={this.state.input}
                        onChange={this.handleChange}
                        />
                    </form>
                </div>
                <EvaluateGuess
                guess = {this.state.guess}
                randomNum = {this.props.randomNum}
                winCallback = {this.props.winCallback.bind(this)} 
                />
            </div>
        )
    }
}

export default PlayScreen