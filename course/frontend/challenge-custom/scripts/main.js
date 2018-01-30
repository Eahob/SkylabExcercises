/*
Write a program that accepts a string and outputs
the smallest number of coins needed to make change,
using only quarters, dimes, nickels, and pennies.

Example:
  input: "$1.05"
 output: "4 Quarters, 1 Nickel"
*/
"use strict"
function programQDNP(value) {
    var numberOfCoins;
    var solution = '';
    var coin = [
        { cents: 25, plural: "Quarters", 1: "Quarter" },
        { cents: 10, plural: "Dimes",    1: "Dime"    },
        { cents: 5,  plural: "Nickels",  1: "Nickel"  },
        { cents: 1,  plural: "Pennies",  1: "Penny"   }
    ];

    value = parseInt(value.replace("$", "") * 100); // Pasamos de dolares a centavos
    if (!value) { return 'invalid input' }

    for (var i = 0; i < 4; i++) {
        numberOfCoins = Math.floor(value / coin[i].cents);
        value = value % coin[i].cents;
        if (numberOfCoins) {// Si numberOfCoins == 0 no las mostramos
            solution += numberOfCoins + ' ' + (coin[i][numberOfCoins] || coin[i].plural) + ', ';
        }
    }
    return solution.slice(0, -2);;
}