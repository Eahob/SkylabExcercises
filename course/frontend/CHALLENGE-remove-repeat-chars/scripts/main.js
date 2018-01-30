/*
Write a recursive function that remove the repeat characters.
input -> removeRepeatChars('aabcbcb') output -> abc
*/

function removeRepeatChars(str) {
    return str.length ? str[0]+removeRepeatChars(str.replace(RegExp(str[0],"g"),'')) : '';
}
