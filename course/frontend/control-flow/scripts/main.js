function largerInteger (integer1,integer2) {
    if (integer1 > integer2) {
        return integer1;
    } else {
        return integer2;
    };
    // return (integer1 > integer2) ? integer1 : integer2;
    /*
    if (integer1 > integer2)
        return integer1;
    return integer2;
    */
};
console.log(largerInteger());

function signProduct() {
    var isPositive = true;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i]<0) {
            isPositive = !isPositive;
        };
    };
    return "The sign is "+(isPositive ? "+" : "-");
};


function sortNumbers (num1,num2,num3) {
    if (num1 > num2 && num1 > num3) {
        if (num2 > num3) {
            return [num1,num2,num3];
        } else {
            return [num1,num3,num2];
        };
    };
    if (num2 > num1 && num2 > num3) {
        if (num1 > num3) {
            return [num2,num1,num3];
        } else {
            return [num2,num3,num1];
        };
    };
    if (num3 > num2 && num3 > num1) {
        if (num2 > num1) {
            return [num3,num2,num1];
        } else {
            return [num3,num1,num2];
        };
    };
};

function largestNumber (num1,num2,num3,num4,num5) {
    var numbers = [num1,num2,num3,num4,num5];
    var max = -1/0;
    for (var i = 0; i < 5; i++) {
        if (numbers[i]>max) {
            max = numbers[i]
        }
    }
    return max;
}
console.log(largestNumber(2,-1,65,23,99));

function oddOrEven () {
    var response = "";
    for (var i = 0; i <= 15;i++) {
        response += i +" is "+ (i%2 ? "odd" : "even") + "\n"
    };
    return response;
};
console.log(oddOrEven());

//console.log( ( (i%3) ? "" : "Fizz" ) + ((i%5) ? "" : "Buzz" ) || i)
function FizzBuzz () {
    var response = "";
    for (var i = 1; i <= 100 ; i++) {
        response += ( ( (i%3) ? "" : "Fizz" ) + ((i%5) ? "" : "Buzz" ) || i) + "\n";
    };
    return response;
};
console.log(FizzBuzz());

function constructPattern () {
    var response = "";
    for (var i = 1; i <= 5 ;i++) {
        for (var j = 1; j <= i; j++) {
            response += "*";
        }
        response += "\n";
    }
    return response;
}
console.log(constructPattern());

function under1000 () {
    var result = 0;
    for (var i = 1; i <= 1000; i++) {
        if ( i%3 == 0 || i%5 == 0 ) {
            result += i;
        }
    }
    return result;
}
console.log(under1000());