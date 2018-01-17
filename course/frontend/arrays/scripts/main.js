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
    var a = arr1.join().split(",");
    var b = arr2.join().split(",");
    var aa = [];
    var bb = [];
    /*
    function aplanar(arr) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                result.concat(aplanar(arr[i]));
            } else {
                result.push(arr[i]);
            }
        }
        return result;
    }
    */
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
    blankArray = elem;
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

    var a = arr1.join().split(",");
    var b = arr2.join().split(",");
    var aa = [];
    var bb = [];

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
    var dupli = findDuplicates(arr1, arr2);
    
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

function mostFrequentItem() {
    //
}


//test = [5, 2, 5, 2, [65, 48, 65, 45,], 87, [98, 789, [879, 321, 3, [789, 321, 232], [78, 89, 98]], 654, 6]]
