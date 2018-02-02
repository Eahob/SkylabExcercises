/* Recreate the game of Hangman */
'use strict'
class Hangman {
    constructor(word, attempts) {
        const N = word.length
        let wordArr = word.toUpperCase().split('')
        let letterCount = N
        let result = {
            attempts: attempts,
            board: new Array(N),
            message: '',
            win: false,
            gameOver: false,
        }
        this.try = response => {
            if (!(result.gameOver || result.win)) {
                result.message = ''
                let message = 'This is not a correct input. Try to write another one'
                if (typeof response === "string") {
                    var responseUpper = response.toUpperCase();
                } else {
                    result.message = message;
                    return result
                }
                if (!(responseUpper >= 'A' && responseUpper <= 'Z')) {
                    result.message = message;
                    return result
                }
                if (responseUpper.length > 1) {
                    //word
                    if (responseUpper === word.toUpperCase()) {
                        //win
                        result.win = true
                        result.message = 'You have guessed the word, well done!';
                        return result
                    } else {
                        //lose
                        result.gameOver = true
                        result.message = `Sorry, you guessed poorly... the correct word is ${ word.toUpperCase()}`;
                        return result
                    }
                } else {
                    //letter
                    let foundALetter = false
                    for (let i = 0; i < N; i++) {
                        if (responseUpper === wordArr[i]) {
                            result.board[i] = wordArr[i]
                            wordArr[i] = undefined
                            letterCount--
                            foundALetter = true
                        }
                    }
                    // Show game
                    if (!foundALetter) { result.attempts-- }
                    if (!result.attempts) {
                        result.message = 'You die!'
                        result.gameOver = true
                    }
                    if (!letterCount) {
                        result.message = 'You win!'
                        result.win = true
                    }
                    return result
                }
    
            } else {
                //Show message
                result.message = 'GAME OVER'
                return result
            }
        }
    }
}