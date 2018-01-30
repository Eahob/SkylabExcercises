/* Recreate the game of Hangman */
'use strict'
function Hangman(word, attemps) {
    var wordArr = word.toUpperCase().split('');
    var N = word.length;
    var letterCount = 0;
    var result = {
        attemps: attemps,
        board: new Array(N),
        message: '',
        win: false,
        gameOver: false,
    };
    this.try = function (response) {
        if (!(result.gameOver || result.win)) {
            result.message = '';
            var message = 'This is not a correct input. Try to write another one'
            if (typeof response === "string") {
                var responseUpper = response.toUpperCase();
            } else {
                result.message = message;
                return result;
            }
            if (!(responseUpper >= 'A' && responseUpper <= 'Z')) {
                result.message = message;
                return result;
            }
            if (responseUpper.length > 1) {
                //word
                if (responseUpper === word.toUpperCase()) {
                    //win
                    result.win = true;
                    result.message = 'You have guessed the word, well done!';
                    return result;
                } else {
                    //lose
                    result.gameOver = true;
                    result.message = 'Sorry, you guessed poorly... the correct word is ' + word.toUpperCase() + '.';
                    return result;
                }
            } else {
                //letter
                var foundALetter = false;
                for (var i = 0; i < N; i++) {
                    if (responseUpper === wordArr[i]) {
                        result.board[i] = wordArr[i];
                        wordArr[i] = undefined;
                        letterCount++
                        foundALetter = true;
                    }
                }
                // Show game
                if (!foundALetter) { result.attemps-- }
                if (result.attemps === 0) {
                    result.message = 'You die!'
                    result.gameOver = true;
                }
                if (N === letterCount) {
                    result.message = 'You win!'
                    result.win = true;
                }
                return result;
            }

        } else {
            //Show message
            result.message = 'GAME OVER.'
            return result;
        }
    }
}