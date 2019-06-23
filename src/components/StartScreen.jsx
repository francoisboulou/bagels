import React, { Component } from 'react';
import instructions from '../instructions/instructions_text'
import Dropdown from './Dropdown'
import './AppStyles.css'



class StartScreen extends Component {

    componentDidMount(){
        document.body.style.backgroundColor = 'lavender'
    }

    render () {
        return (
            <div className='general startScreen'>
                <h1 className='startHeading'>BAGELS!</h1>
                <div className='instructions'>
                    <h2>Instructions</h2>
                    <p>{ instructions }</p>
                </div>
                <div className='settings'>    
                    <Dropdown 
                    callbackFromParent={this.props.callbackFromParent.bind(this)}
                    />
                    <button className='button' onClick={this.props.instructionsCallback.bind(this)}>Start Game</button>
                </div>   
            </div>
        )
    }
}

export default StartScreen