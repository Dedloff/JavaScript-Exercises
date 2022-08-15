//Exercise 1
var a = 20;
var b = 4;
var add = a + b;
var minus = a - b;
var multiply = a * b;
var dividing = a / b;

console.log (add);
console.log (minus);
console.log (multiply);
console.log (dividing);

//Exercise 2
let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

/*W
hat is the value of: num + str?
What is the value of: num + str2?
What is the value of: num + isPresent?
What is the value of: firstName + num?
What is the value of: isPresent + str?
What is the value of: firstName + lastName?
*/

console.log (num + str);
//1111
console.log (num + str2);
//11eleven
console.log (num + isPresent);
//12
console.log (firstName + num);
//Frodo11
console.log (isPresent + str);
//true11
console.log (firstName + lastName);
//FrodoBaggins


//Exercise 3
let val = 5;
let str3 = "5";
let str4 = "five";
let isAwake = false;

/*
What is the value of: val == str3?
What is the value of: val === str3?
What is the value of: !isAwake?
What is the value of: ("eleven" == str4 && val >= str3)?
What is the value of: (!isAwake || isAwake)?
What is the value of: 0 == false?
What is the value of: 0 === false?
What is the value of: 0 != false?
What is the value of 0 !== false?
*/

console.log (val == str3);
//true
console.log (val === str3);
//false
console.log (!isAwake);
//true
console.log ("eleven" == str4 && val >= str3);
//false
console.log (!isAwake || isAwake);
//true
console.log (0 == false);
//true
console.log (0 === false);
//false
console.log (0 != false);
//false
console.log (0 !== false);
//true
