import React, { Component } from 'react'
import './AppStyles.css'

class EndScreen extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = 'blue'
    }

    render() {
        if (this.props.win === true) {
            return  (
                <div className='general'>
                    <h1>You Win!</h1>
                    <button className='button' onClick={this.props.PlayAgainCallback.bind(this)}>Play Again?</button>
                </div>
            )
        }
        else {
            return  (
                <div>
                    <h1>You Lose</h1>
                    <button className='button' onClick={this.props.PlayAgainCallback.bind(this)}>Play Again?</button>
                </div>
            )  
        }
    }
}

export default EndScreen