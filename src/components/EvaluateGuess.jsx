import React from 'react'
import bagel from '../images/bagel.png'
import fermi from '../images/fermi.png'
import pico from '../images/pico.png'
import '../index.css'
import { log } from 'util';


export function EvaluateGuess (props) {
  
    const randomNum = [...String(props.randomNum)]  
    let guess = [...String(props.guess)]        
    let result = []
    let resultStr = []
    
    if (props.guess) {
        guess.forEach((digit, i) => {           
            if (randomNum.includes(digit)) {
                if (digit === randomNum[i]) { 
                    result.push(<img src={fermi} alt=""/>)
                    console.log("pushed fermi", i);
                }
                else {
                    result.push(<img src={pico} alt="" />)
                    resultStr.push("pico")
                    console.log("pushed pico", i);
                }
            }
        })
    
        if (!result.length) {
            result.push(<img src={bagel} alt=""/>)
        }
    
        if (result.length === 3 && !resultStr.includes("pico")) { //add result string object         
            props.winCallback()
        }
    
        return <div className='clueImg'>{result}</div>
    }
    return null
}


// guess = ''

// playAgain = 'Y'

// while playAgain == 'Y':
//     secretNumber = secretNum()
//     while guess != secretNumber:
//         guess = getGuess()
//         compareGuess()
//     else:
//         print('yay!')
//         playAgain = input('play again? Enter Y to play again and any other key to quit')
        

