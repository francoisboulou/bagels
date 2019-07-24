import React, { Component } from 'react';
import { Instructions } from '../components/Instructions'
import Dropdown from '../components/Dropdown'
import '../index.css'
import megaMan from '../audio/megaMan.mp3'
import silence from '../audio/silence.mp3'


class StartScreen extends Component {

    constructor () {
        super ()

        this.state = {
            musicPaused: false,
            musicLoaded: false,
            music : megaMan,
            silence : silence,
        }

        this.openOverlay = this.openOverlay.bind(this)
    }

    componentDidMount(){
        setTimeout(() => document.querySelector('.menu').style.display = 'flex', 6500)
    }

    openOverlay() {
        document.getElementById('instOverlay').style.display = 'block'
    }

    render () {
        // if (this.state.musicLoaded === false) {
        //     return (
        //         <div>
        //             loading
        //         </div>
        //     )
        // }
        // else {
            return (
                <div className='startScreen'>
                    <iframe title="fakey" src={this.state.silence} allow="autoplay" id="audio" style={{display:"none"}}></iframe>
                    <audio id="strtMusic" ref="audio_tag" src={this.state.music} autoPlay/>
                    <h1 className='title'>BAGELS!</h1>   
                    <div className='menu'>
                        <Instructions />
                        <h2 onClick={this.openOverlay}>Instructions</h2>    
                        <Dropdown 
                        callbackFromParent={this.props.callbackFromParent.bind(this)}
                        />
                        <h2 onClick={this.props.instructionsCallback.bind(this)}>Start Game</h2>
                    </div>
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
                    style={{fontSize: "45px", position: "absolute", bottom:"2.5%", right:"2.5%", cursor: 'pointer'}}>||
                    </p>  
                </div>
        )}
    //  }
}

export default StartScreen