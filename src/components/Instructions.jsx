import React from 'react'
import pico from '../images/pico.png'
import fermi from '../images/fermi.png'
import bagel from '../images/bagel.png'
import '../index.css'

const BAGEL = {
    width: '70px',
    height: '70px',
}     

const FERMI = {
    width: '70px',
    height: '70px',
}

const PICO = {
    width: '70px',
    height: '70px',
}

const POS = {
    position: 'absolute',
    top: '5%',
    left: '3%',
    fontSize: '1.5rem',
}

const MARG = {
    marginTop: '8%',
}

export function Instructions () {
    return (
        <div className='instructionsText' id='instOverlay'>
            <div className='instCont'>
                <p style={POS} onClick={() => {document.getElementById('instOverlay').style.display = 'none'}}>X</p>
                <p style={MARG}>I will think of a three digit number.</p>
                <p>You will try to guess the number, and I will respond to each guess as follows:</p><br/>
                <p>If the guess has no digits correct:</p><img style={BAGEL} src={bagel} alt=""/>
                <p>For each correct digit in the wrong place:</p><img style={PICO} src={pico} alt=""/> 
                <p>For each correct digit in the correct place:</p><img style={FERMI} src={fermi} alt=""/>
            </div>
        </div>
    )
} 