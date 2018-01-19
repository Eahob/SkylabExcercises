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

