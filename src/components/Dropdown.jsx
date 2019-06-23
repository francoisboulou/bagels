import React, { Component } from 'react'
import './AppStyles.css'

const MARGIN = {
    margin: '0',
}

class Dropdown extends Component {
    constructor(props) {
        super(props)

        this.state = {
            difficulty: "Easy",
            displayMenu: false,
        }

        this.openMenu = this.openMenu.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.guessesCallback = this.guessesCallback.bind(this)
    }

    openMenu(e) {
        e.preventDefault()
        this.setState({
            displayMenu: true,
        }, () => {document.addEventListener("click", this.closeMenu)})
    }

    closeMenu() {
        this.setState({
            displayMenu: false
        }, ()=> {document.removeEventListener("click", this.closeMenu)})
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            difficulty: e.target.getAttribute("value")
        },() => {this.guessesCallback()} )
            
    }
    
    guessesCallback() {
        // [...somewhere in here I define a variable listInfo which    I think will be useful as data in my ToDoList component...]
        const difficultyLevel = this.state.difficulty
        this.props.callbackFromParent(difficultyLevel) 
    }

    render() {
        return (
            <div>
                <div>
                    <h2 style={MARGIN} onClick={this.openMenu}>Difficulty</h2>
                    <p>{this.state.difficulty}</p>
                </div>
                <div>
                    {this.state.displayMenu ?
                    (
                    <ul className='listStyle'>
                        <li value="Easy" onClick={this.handleSubmit}>Easy</li>
                        <li value="Medium" onClick={this.handleSubmit}>Medium</li>
                        <li value="Hard" onClick={this.handleSubmit}>Hard</li>
                    </ul>
                    )
                    :
                    (
                        null
                    )}
                </div>
            </div>
        )}
}

export default Dropdown