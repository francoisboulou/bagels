import React, { Component } from 'react'
import { EvaluateGuess } from './EvaluateGuess.jsx'
import './AppStyles.css'


const FLEX = {
    display: 'flex',
    flexDirection: 'column'
}

const MARGIN = {
    marginBottom: '5%'
}

class PlayScreen extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            input : '',
            guess: 0,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.myFun = this.myFun.bind(this)
    }

    componentDidMount() {
        document.body.style.backgroundColor = 'aqua'
    }

    handleChange(e) {
        this.setState({input: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.state.input.length === 3 && Number.isInteger(Number(this.state.input))) {
            this.setState({
                    guess: this.state.input,
                    input: '',  
                }, () => {this.myFun()})
        }
        else {
            alert("guess should be 3 numbers")
        }

    }
  
    myFun() {
        // [...somewhere in here I define a variable listInfo which    I think will be useful as data in my ToDoList component...]
        this.props.callbackFromParent((this.props.guesses - 1)) 
    }



    render() {
        console.log("submit guess is rendering")
        console.log("guess: " + this.state.guess);
                
        return (
            <div className='general'>
                <h1>Guesses: {this.props.guesses}</h1>
                <h2 style={MARGIN} >Guess a 3 digit number</h2>
                <form style={FLEX} onSubmit={this.handleSubmit}>
                    <input className='input'
                    type='text'
                    value={this.state.input}
                    onChange={this.handleChange}
                    />
                    <input className='button' type='submit' value='submit'/>
                </form>
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