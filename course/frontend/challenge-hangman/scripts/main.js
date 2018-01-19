/* Recreate the game of Hangman */

function Hangman(word, attemps) {
    var wordArr = word.toLowerCase().split('');
    var board = [];
    var N = word.length;
    var counter = 0;
    for (var i = 0; i < N; i++) {
        board[i] = '_';
    }
    this.attemps = attemps;
    this.try = function (response) {
        if (response === null || response === undefined || typeof response === "number") {
            return " " + "This is not a correct input. Try to write another one"
        }
        var str = response.toLowerCase();

        function gameOver() { return "Game Over"; }
        function gameOverCompleteWord() { return "Game Over false word"; }

        if (str.length > 1 && str === word) {
            return "Very well! You Guessed!";
        } else if (str.length === 1) {
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
                if (correctAns)++attemps;
                return attemps + ' ' + board.join(' ') + (N === counter ? ' - You won!' : '');
            } else {
                return gameOver();
            }
        } else {
            return gameOverCompleteWord();
        }
    }
}

var game = new Hangman('hello', 5);

function testHangMan() {
    console.log("Function must treat Number|undefined|null like invalid parameters: ");

    if (game.try(0) != undefined || null || "number") {
        console.log("OK " + " null " + game.try(null))
        console.log("OK " + " undefined " + game.try(undefined))
        console.log("OK " + " number " + game.try(undefined))
    } else {
        console.log("KO " + "\n" + game.try(null))
    }

    console.log("\n" + "Function should show this like sucess: ");

    if (game.try("hello") === "Very well! You Guessed!") {
        console.log("OK  " + game.try("hello"))
    } else {
        console.log("KO " + "\n" + " " + game.try("hello"))
    }

    console.log("\n" + "Function should show this like a game over by add false word:  ");

    if (game.try("hello") === "Very well! You Guessed!") {
        console.log("OK  " + " " + game.try("honor"))
    } else {
        console.log("KO  " + " " + game.try("honor"))
    }
    console.log("\n" + "Function should show this like Game Over:  ");

    for (var index = 0; index < game.attemps - 1; index++) {
        console.log(game.try("r"));
    }
    if (game.try("r") == "Game Over") {
        console.log("OK  " + " " + game.try("r"))
    } else {
        console.log("KO  " + " " + game.try("r"))
    }
}

testHangMan();

/*function Hangman (word,attemps) {
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

*/

