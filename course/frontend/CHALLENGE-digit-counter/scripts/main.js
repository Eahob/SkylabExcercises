/* counter-digit
Write a recursive function to count the times that a digit its repeat in a number.

input -> digitCount(2536228324, 2);
output-> 2 its 4 times

*/

function digitCount(number, digit) {
    if (Number.isSafeInteger(number) ){
        return 'Number too large'
    }
    if (typeof number === 'number') {
        number = number.toString().split('');
    }
    if (number.length) {
        return ( number.pop() == digit ? 1 : 0) + digitCount(number,digit)
    } else {
        return 0;
    }
    // return number.length ? ( number.pop() == digit ? 1 : 0) + digitCount(number,digit) : 0;
}
