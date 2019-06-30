import React from 'react'
import bagel from '../images/bagel.png'
import fermi from '../images/fermi.png'
import pico from '../images/pico.png'


const BAGEL = {
    width: '250px',
    height: '250px',
    // marginTop: '2%',
}     

const FERMI = {
    width: '250px',
    height: '250px',
    // marginTop: '2%',
}

const PICO = {
    width: '250px',
    height: '250px',
    // marginTop: '2%',
}



export function EvaluateGuess (props) {
  
    let randomNum = [...String(props.randomNum)]  
    let guess = [...String(props.guess)]        
    let result = []
    
    if (props.guess){
        guess.forEach((digit, i) => {           
            if (randomNum.includes(digit)) {
                if (digit === randomNum[i]) { 
                    result.push(<img style={FERMI} src={fermi} alt=""/>)
                    delete randomNum[i]
                }
                else {
                    result.push(<img style={PICO} src={pico} alt="" />)
                    delete randomNum[i]
                }
            }
        })
    
        if (!result.length) {
            result.push(<img style={BAGEL} src={bagel} alt=""/>)
        }
    
        if (result.length === 3 && !result.includes("pico")) {            
            props.winCallback()
        }
    
        return <div>{result}</div>
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
        

