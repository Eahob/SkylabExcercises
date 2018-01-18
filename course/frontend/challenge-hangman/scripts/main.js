/* Recreate the game of Hangman */

function Hangman (word,attemps) {
    var wordArr = word.toLowerCase().split('');
    var board = [];
    var N = word.length;
    var counter = 0;
    for (var i = 0; i < N; i++) {
        board[i] = '_';
    }
    this.try = function (response) {
        var str = response.toLowerCase();
        function gameOver () {return "Game Over";}
        if (str.length > 1 && str === word) {
            return "Very well! You Guessed!";
        } else if (str.length === 1 ){
            if (--attemps > 0) {
                var correctAns = false;
                for (var i = 0; i < N; i++) {
                    if (str === wordArr[i]) {
                        board[i] = wordArr[i];
                        delete wordArr[i];
                        counter++;
                        correctAns = true;
                    }
                }
                if (correctAns) ++attemps;
                return attemps + ' ' + board.join(' ') + (N === counter ? ' - You won!':'');
            } else {
                return gameOver();
            }
        } else {
            return gameOver();
        }
    }
}

var game = new Hangman ('hello',5);