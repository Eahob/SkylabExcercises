/*
map
Write a high order function that takes the array of months and create a new array that contains the same months but with the first letter in upper case.
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']
*/

var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

/*
var capitalMonths = months.map(function (str) {
    return str[0].toUpperCase() + str.substring(1);
});

console.log(capitalMonths)
*/

function capitalizeWords(words) {
    return words.map(function (word) {
        return word[0].toUpperCase() + word.substring(1);
    });
}
console.log('For months should return: [January, February, ...] : ', capitalizeWords(months))

/*
filter
Write a high order function that take the array of months and create a new array that contains only the months that begin with j.
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']
*/
/*
var filteredMonths = months.filter(
    function (str) {
        return str[0] === "j"
    }
);

console.log(filteredMonths)
*/
function getWordsThatStartWithJ(words) {
    return words.filter(function (word) {
        return word[0] === "j"
    });
}

console.log('For months should return:  [ "january", "june", "july" ]: ', getWordsThatStartWithJ(months))

/*
reduce

Write a high order function that counts all the vowels of the following text.
var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
*/

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'

var vowelCount = loremIpsum.split('').reduce(function (sum, letter) {
    var l = letter.toLowerCase();
    if (l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u') {
        return ++sum;
    } else {
        return sum;
    }
    // hacer ternario con regexp
}, 0);

console.log(vowelCount)

var vowelCount;
(function () {
    var regex = /[aáàäâeéèëêiíìïîoóòöôuúùüûãõ]/ig;
    vowelCount = function (text) {
        return text.split('').reduce(function (sum, letter) {
            return letter.match(regex) ? ++sum : sum;
        }, 0)
    }
}
)();

console.log(vowelCount('HILÄ'), vowelCount(loremIpsum))

/*
every & some
Write a high order function that returns true if all months have five letters or more, and if some month has five letters or more.
*/

function allWordsHaveFiveLettersOrMore(words) {
    return words.every(function (word) {
        return word.length > 4;
    });
}
console.log('should be false for months: ', allWordsHaveFiveLettersOrMore(months)); //should be false

function someWordsHaveFiveLettersOrMore(words) {
    return words.some(function (word) {
        return word.length > 4;
    });
}
console.log('should be true for months: ', someWordsHaveFiveLettersOrMore(months));

/*
Callback
Write a callback function that receives an age and a callback function, if age is equal or great than 18,
call the callback function to allow enter in a bar, if hasn't 18 the entrance is not allowed.
*/

function wellcome(){
    return 'Wellcome to the Bar';
}
function enterBar(age,callback) {
   return age > 17 ? callback(age) : 'You can not enter.';
}

console.log(enterBar(10,wellcome))
console.log(enterBar(25,wellcome))
