import React from 'react'

export function EvaluateGuess (props) {
  
    let randomNum = [...String(props.randomNum)]  
    let guess = [...String(props.guess)]        
    let result = []
    
    if (props.guess){
        guess.forEach((digit, i) => {           
            if (randomNum.includes(digit)) {
                if (digit === randomNum[i]) { 
                    result.push("fermi")
                    delete randomNum[i]
                }
                else {
                    result.push("pico")
                    delete randomNum[i]
                }
            }
        })
    
        if (!result.length) {
            result.push("bagel")
        }
    
        if (result.length === 3 && !result.includes("pico")) {            
            props.winCallback()
        }
    
        return <h1>{result.join(',')}</h1>
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
        

