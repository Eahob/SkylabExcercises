/*is_object

Write a JavaScript function to check whether an input is an object or not.
*/

function isObject(obj) {
    return typeof obj === 'object' && !obj.length;
}

console.log('should return true: ', isObject({ key: 'value' }));
console.log('showld return false: ', isObject([54, 65, 65]));
console.log('showld return false: ', isObject("string"));
console.log('showld return false: ', isObject(987564));

/*
Create object car
Write an object that represents a car with three properties: brand, model, color. Add a method that shows the following message: 'My black Sean León is great!' (Hint: use this)
Use literal notation, and object constructor notation.
*/

function Car(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.messege = function () {
        return 'My ' +color+' '+brand+' '+model+' is great!';
    }
}

var myCar = new Car('Seat','León','black');
console.log(myCar.messege());