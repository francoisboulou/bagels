import React, {Component} from 'react'
import '../index.css'

class Alert extends Component {
    
    render() {
        return (
            <div id="alertCont" onClick={this.props.handleAlertClick}>
                <div id='guessAlert'>
                    <div>
                        <p>Guess should be 3 digits</p>
                        <p>No duplicate numbers</p>
                    </div>
                    <button id="alertButton">Cool</button>
                </div>
            </div>
        )
    }
}

export default Alert
