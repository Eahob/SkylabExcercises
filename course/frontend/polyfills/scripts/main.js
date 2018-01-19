/*
LIL polyfill Array.prototype.shuffle() to randomly disorder an array into a new array.
*/

Array.prototype.shuffle = function () {
    var rand = [];
    var copy = this.slice();
    for (var i = 0; i < this.length; i++) {
        var j = Math.floor(Math.random() * copy.length);
        rand[i] = copy[j];
        copy.splice(j, 1);
    }
    return rand;
}

var test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(test);
console.log(test.shuffle());

/*
LIL function to convert camelCase text into lower-case case and spaces (e.g. camelCaseToLowerCaseWithSpaces("helloWorld") -> "hello world")..
*/

String.prototype.camelCaseToLowerCaseWithSpaces = function () {
    var newString = '';
    for (var i = 0; i < this.length; i++) {
        if (this[i] <= "Z") {
            newString += ' ' + this[i].toLowerCase();
        } else {
            newString += this[i];
        }
    }
    return newString;
}

camelCaseString = 'enUnLugarDeLaManchaDeCuyoNombreNoQuieroAcordarme';

console.log(camelCaseString.camelCaseToLowerCaseWithSpaces())

/*
LIL function to detect if a string is numeric (e.g. isNumber('0') => true).
*/
function isNumeric(string) {
    return parseFloat(string) == string;
}

/*
LIL function to detect if a string has any symbol (e.g. hasSymbol('hello%') => true).
*/

function hasSymbol(string) {
    for (var i = 0; i < string.length; i++) {
        if ( !( ( "A" <= string[i] && string[i] <= "Z") || ("a" <= string[i] && string[i] <= "z") ) ) {
            return true;
        }
    }
    return false;
}