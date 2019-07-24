import React from 'react'
import '../index.css'

export function Alert () {
    return (
        <div id="alertCont" onClick={() => {
            document.getElementById('alertCont').style.display = 'none'
            document.getElementById('guessInput').focus();
            }}>
            <div id='guessAlert'>
                <p>Guess should be 3 digits, and can have no duplicate numbers</p>
            </div>
        </div>
    )
}