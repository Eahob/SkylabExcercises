/*
Person

a) Write a constructor function called Person and that has the following arguments:

first-name          //string
last-name           //string
age                 //number
gender              //string
interests           //array

*/

function Person(firstName, lastName, age, gender, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

/*
b) Write the following three methods for Person.

greeting() //returns: Hi! I'm <first-name>.
farewell() //returns: <first-name> has left the building. Bye for now!
bio()      //returns: <first-name> <last-name> is <age> years old. <He/She> likes <interest-1>, <interest-2>, .... and <interest-n>.
*/

Person.prototype.greeting = function () {
    return 'Hi! I\'m '+this.firstName;
}
Person.prototype.farewell = function() {
    return this.firstName +' has left the building. Bye for now!';
}
Person.prototype.bio = function () {
    return this.firstName + ' ' + this.lastName + ' is ' + this.age + ' years old. '+ this.gender + ' likes '+ this.interests.join(', ');
}

/*
Student

a) Write a constructor function called Student that inherit from Person and that has the following arguments:

first-name          //string
last-name           //string
age                 //number
gender              //string
interests           //array
*/

function Student (firstName, lastName, age, gender, interests) {
    Person.call(this,firstName, lastName, age, gender, interests);
}
/*
b) The Student must inherit all methods from Person and overwrite greeting method to change its behavior to print:
greeting() //returns: Yo! I'm  <first-name>.
*/
Student.prototype.greeting = function() {
    return "Yo! I'm "+this.firstName;
}

/*
Teacher

a) Write a constructor function called Teacher that inherit from Person and that has the following arguments:

first-name          //string
last-name           //string
age                 //number
gender              //string
interests           //array
subject             //string
*/

function Teacher (firstName, lastName, age, gender, interests, subject) {
    Person.call(this,firstName, lastName, age, gender, interests);
    this.subject = subject;
}

/*
b) The Teacher must inherit all methods from Person and overwrite greeting method to change its behavior to print:

greeting() //returns: Hello. My name is <Mr./Mrs> <last-name> and I teach <subject>.
*/

Teacher.prototype.greeting = function() {
    return "Yo! I'm "+this.gender+' '+this.lastName+' and I teach '+this.subject;
}
