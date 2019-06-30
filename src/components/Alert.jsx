import React from 'react'
import '../index.css'

export function Alert () {
    return (
        <div id='guessAlert' onClick={() => {document.getElementById('guessAlert').style.display = 'none'}}>
            <p>Guess should be 3 digits</p>
        </div>
    )
}