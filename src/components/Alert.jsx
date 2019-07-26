import React, {Component} from 'react'
import '../index.css'

class Alert extends Component {

    constructor(props) {
        super(props) 

    }
    
    render() {
        return (
            <div id="alertCont" onClick={this.props.handleAlertClick}>
                <div id='guessAlert'>
                    <p>Guess should be 3 digits, and can have no duplicate numbers</p>
                    <button id="alertButton">Cool</button>
                </div>
            </div>
        )
    }
}

export default Alert
