/**
 * Challenge:
 * Create an object with a secret that only con be read with a pasword
 *   var box = new Box('secret thing')
 *   console.log(box.getSecret('<password>'))
 **/

function Box(secret,password) {
    this.getSecret = function (pw) {
        if (pw === password) return secret;
    }
}
var box = new Box('secret thing',1234);
console.log('Should show the secret:',box.getSecret(1234));
console.log('Should not show the secret:',box.getSecret(4568));

/* Now create a function that changes the secret (setSecret) and an other that changes the password (changePassword) */

function Box2(secret,password) {
    this.getSecret = function (enteredPasword) {
        if (enteredPasword === password) return secret;
    }
    this.setSecret = function (newSecret,enteredPassword) {
        if (enteredPassword === password) secret = newSecret;
    }
    this.changePassword = function (newPassword,enteredPassword) {
        if (enteredPassword === password) password = newPassword;
    }
}

var box2 = new Box2('second secret thing',9876);

box2.setSecret('also a secret thing',9876);
console.log('Should show "also a secret thing":',box2.getSecret(9876));

box2.changePassword(3210,9876);
console.log('Should not show the secret:',box2.getSecret(9876));
console.log('Should show the secret:',box2.getSecret(3210));
