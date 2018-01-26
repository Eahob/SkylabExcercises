/*
isArray
Write a JavaScript function to check whether an input is an array or not.
*/

function isArray(array) {
    return array.length > 0 && ((typeof array) == "object");
}
console.log(isArray('Skylab'));    // this should returns false
console.log(isArray([3, 5]));      // this should returns true

/*
joinElements
Write a simple JavaScript program to join all elements of the following array into a string.

Sample array : beatles = ['John','George','Ringo','Paul'];

Expected Output : 
'John,George,Ringo,Paul'
*/

function joinElements(array) {
    return array.join();
}
console.log(joinElements(['John', 'George', 'Ringo', 'Paul']));

/*
array_Clone

Write a JavaScript function to clone an array.

Test Data :
console.log(array_Clone([1, 2, 4, 0])); 
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0] 
[1, 2, [4, 0]]
*/

function arrayClone(array) {
    return array.slice();
}
console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));

/*
findDifferences

Write a JavaScript function to find the difference of two arrays.

Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); 
["6"]
 */

function findDifferences(arr1, arr2) {
    var result = [];
    var aa = [];
    var bb = [];

    function phlatArray(arr) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                result = result.concat(phlatArray(arr[i]));
            } else {
                result.push(arr[i]);
            }
        }
        return result;
    }
    var a = phlatArray(arr1);
    var b = phlatArray(arr2);
    for (var i = 0; i < a.length; i++) {
        aa[a[i]] = a[i];
    }
    for (var i = 0; i < b.length; i++) {
        bb[b[i]] = b[i];
    }
    N = Math.max(aa.length, bb.length)
    for (var i = 0; i < N; i++) {
        if (aa[i] != bb[i]) {
            if (aa[i]) {
                result.push(aa[i]);
            } else {
                result.push(bb[i]);
            }
        }
    }
    return result;
}
console.log(findDifferences([1, 2, 3], [100, 2, 1, 10]));
console.log(findDifferences([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));

/*
Sum and Product

Write a JavaScript program to compute the sum and product of an array of integers.
*/

function SumAndProduct(array) {
    var sum = 0;
    var pro = 1;
    for (var i = 0, sum = 0, pro = 1; i < array.length; i++) {
        sum += array[i];
        pro *= array[i];
    }
    return [sum, pro];
}
console.log(SumAndProduct([8, 5, 1, 3, 5, 6]))
/*
addItems
Write a JavaScript program to add items in an blank array and display the items.
*/

function addItems(blankArray, elem) {
    return blankArray = elem;
}
/*
generateArrayLength
Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.
*/
function arrayRange(start, arrayLength) {
    var result = [];
    for (var i = 0; i < arrayLength; i++) {
        result[i] = i + start;
    }
    return result;
}
console.log(arrayRange(1, 4));
console.log(arrayRange(-6, 4));

/*
last

Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
*/

function last(array, n) {
    var al = array.length;
    if (!n) return array[al - 1];
    var result = [];
    if (n > al) n = al;
    for (var i = al - n, j = 0; i < al; i++ , j++) {
        result[j] = array[i];
    }
    return result;
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));

/*
sortItems

Write a JavaScript program to sort the items of an array.
*/

function sortItems(array) {
    var result = [];
    var checkList = [];
    var index;
    for (var i = 0; i < array.length; i++) {
        var min = Infinity;
        for (var j = 0; j < array.length; j++) {
            if (array[j] < min && !checkList[j]) {
                min = array[j]
                index = j;
            }
        }
        result[i] = min;
        checkList[index] = true;
    }
    return result;
}
console.log(sortItems([3, 8, 7, 6, 5, -4, 3, 2, 1]))

/*
getRandom

Write a JavaScript function to get a random item from an array.
*/

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
console.log(getRandom([98, 65, 4, 6, 2, 65, 8]))

/*
findDuplicates

Write a JavaScript program to find duplicate values in a JavaScript array.
*/

function findDuplicates(arr1, arr2) {
    var result = [];
    var aa = [];
    var bb = [];
    function phlatArray(arr) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                result = result.concat(phlatArray(arr[i]));
            } else {
                result.push(arr[i]);
            }
        }
        return result;
    }
    var a = phlatArray(arr1);
    var b = phlatArray(arr2);

    for (var i = 0; i < a.length; i++) {
        aa[a[i]] = a[i];
    }
    for (var i = 0; i < b.length; i++) {
        bb[b[i]] = b[i];
    }

    N = Math.max(aa.length, bb.length)

    for (var i = 0; i < N; i++) {
        if (aa[i] && aa[i] == bb[i]) {
            result.push(aa[i]);
        }
    }
    return result;
}
console.log(findDuplicates([1, 2, 3], [100, 2, 1, 10]));
console.log(findDuplicates([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));

/*
mergeArrays

Write a JavaScript function to merge two arrays and removes all duplicates elements.
*/

function mergeArrays(arr1, arr2) {
    return findDifferences(arr1, arr2);
}

/*
separateEven

Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
*/

function separateEven(number) {
    var result = '';
    var num = number.toString();
    for (var i = 0; i < num.length - 1; i++) {
        result += num[i];
        if (num[i] % 2 == 0 && num[i + 1] % 2 == 0) {
            result += '-';
        }
    }
    result += num[num.length - 1];
    return result;
}
console.log(separateEven(625468))

/*
mostFrequentItem
Write a JavaScript program to find the most frequent item of an array.
*/

function mostFrequentItem(list) {
    var most = {};
    function phlatArray(arr) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                result = result.concat(phlatArray(arr[i]));
            } else {
                result.push(arr[i]);
            }
        }
        return result;
    }
    result = phlatArray(list);
    //console.log(result)
    for (var i = 0; i < result.length; i++) {
        if (most[result[i]]) {
            most[result[i]]++;
        } else {
            most[result[i]] = 1;
        }
    }
    var last = -Infinity;
    for (var k in most) {
        if (last < most[k]) {
            last = most[k];
            result = k
        }
    }
    return result;
}


//test = [5, 2, 5, 2, [3, 2, 5, 5], 6, [6, 5, [2, 3, 3, [5, 3, 2], [6, 2, 5]], 6, 6]]

/*
moveElement
Write a JavaScript function to move an array element from one position to another.
*/
function moveElment(arr, pos1, pos2) {
    if (typeof pos1 === 'number' && typeof pos2 === 'number') {
        var temp = arr[pos2];
        arr[pos2] = arr[pos1];
        arr[pos1] = temp;
    }
    return arr;
}

/*
swapCase
Write a JavaScript program which accept a string as input and swap the case of each character.
For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
*/

function swapCase(str) {
    result = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i].toLowerCase()) {
            result += str[i].toUpperCase()
        } else {
            result += str[i].toLowerCase()
        }
    }
    return result;
}
/*
Print elements array
Write a JavaScript program which prints the elements of the following array.
Note : Use nested for loops.

    Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    Sample Output : 
    "row 0" 
    " 1" 
    " 2" 
    " 1"
    " 24"
    "row 1" 
*/

function printThisArray(arr) {
    var result = '';
    for (var i = 0; i < arr.length; i++) {
        result += 'row ' + i + '\n';
        for (var j = 0; j < arr[i].length; j++) {
            result += ' ' + arr[i][j] + '\n';
        }
    }
    return result;
}
var thisArray = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log(printThisArray(thisArray));

/*
arrayFilled (string)
Write a JavaScript function to create a specified number of elements with pre-filled string value array.

    Test Data :
    console.log(arrayFilled(3, 'default value')); 
    ["default value", "default value", "default value"]
    console.log(arrayFilled(4, 'password'));
    ["password", "password", "password", "password"]
*/
function arrayFilled(num, value) {
    var result = [];
    if (typeof num != "number") {
        num = 0
    }
    for (var i = 0; i < num; i++) {
        result[i] = value;
    }
    return result;
}

/*
Sum squares
Write a JavaScript program to find the sum of squares of a numeric vector.
*/

function sumSquares(numArr) {
    var sum = 0;
    for (var i = numArr.length - 1; i > -1; i--) {
        if (typeof numArr[i] == "number") {
            sum += numArr[i] ** 2;
        }
    }
    return sum;
}
/*
removeDuplicate
Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
*/
