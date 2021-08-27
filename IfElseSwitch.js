// let weather = "suny";

// if(weather == "sunny")
//     console.log("Better break out the sunscreen");
// else if (weather == "rainy")
//     console.log("better find my water proof coat");
// else
//     console.log("I'll just wear whatever");

// if (1==="1") {
//     console.log(true); // "==" equal, checks for value regardless of datatype
// } else {
//     console.log(false); // "===" strict equal, checks for value AND datatype
// }

let place = "Manchester";
let weather = "Rainy";

// if (place == "Manchester" && weather == "Sunny" || "sunny") { // || is for "or" allowing for the conditions to be met, in this case regardless of capitalisation
//     console.log("That doesn't sound right");
// } else if (place == "Manchester" && weather == "Raining") { // && is "and", allowing to check for multiple conditions to be met
//     console.log("Well duh");
// } else{
//     console.log("The Sky is confused");
// }

// switch(place && weather){ //Switch operators using multiple variables
//     case "Manchester" && "Sunny":
//         console.log("That doesn't sound right")
//         break;
//     case "Manchester" && "Rainy":
//         console.log("Well duh")
//         break;
//     default:
//         console.log("The sky is confused")
//         break;
// }


//Activity 1

// let age = 23
// country = "UK"

// if (age>17 && country == "UK"){
//     console.log("Yes, I can serve you.")
// }   else {
//     console.log("You aren't old enough")
// }

//Activity 2

// let topping = "glue"

// if (topping == "Chicken" || topping == "Sweetcorn") {
//     console.log("this is an underrated pizza topping, and is very important to my pizza tasting experience");
// }   else if (topping == "Pepperoni" || topping == "Beef" || topping == "Peppers"){
//         console.log(`I don't mind having ${topping} on my pizza.`);
// }   else if (topping == "Mushroom" || topping == "Pineapple"){
//         console.log("Get this stuff off my pizza this instant!");
// }   else{
//         console.log(`What exactly have you put on my pizza this time? ${topping}? Why the hell have you done that?`);
// }


//Activity 3

// let password = "Geronimo"

// if(password.length<8){
//     console.log("Your password is too short")
// } else {
//     console.log(password)
// }

//Activity 3.5

// let num = 15
// if(num%3 == 0 || num%5 == 0){
//     console.log("this number is divisible by 3 or 5")
// } else {
//     console.log("this number is not divisible by 3 or 5")
// }

//Activity 4

// let num = 32

// if (num%3 == 0 && num%5 == 0){
//     console.log("FizzBuzz")
// }   else if(num%3 == 0){
//     console.log("Fizz")
// }   else if(num%5 == 0) {
//     console.log("Buzz")
// }   else {
//     console.log(num)
// }

//Activity 5

// let num = 63633636
// let string = num.toString();
// const len = string.length
// let palindrome = false;

// for(let i = 0; i < len / 2; i++) {
//     if (string[i] == string[len - 1 - i]){
//         palindrome = true;
//     }   else{
//         palindrome = false;
//     }
// }
// if(palindrome){
//     console.log("This is a palindrome")
// }   else{
//     console.log("This is not a Palindrome")
// }

//Activity 6

// let time = 25
// let placeOfWork = "M&S"
// let townOfHome = "Manchester"

// if (time <= 8){
//     console.log("I'm in bed")
//    }   else if(time > 24){
//     console.log("congratulations, you've broken the space-time continuum")
// }   else if(time == 9){
//     console.log("I'm getting ready for work")
// }   else if(time == 10){
//     console.log(`I'm commuting through ${townOfHome} to get to my job at ${placeOfWork}.`)
// }   else if(time >= 18){
//     console.log("I'm relaxing at home again") 
// }   else if (time == 17){
//     console.log(`I'm heading home through ${townOfHome} again`)
// }   else if(time >= 11){
//     console.log(`I'm working at ${placeOfWork}`)
// }   


//Activity 7 

// let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// let vowelArr = ["a", "e", "i", "o", "u"]

// for (let i = 0; i < str.length; i++)
//     if(str.charAt(str.length-i) == vowelArr[0]){
//         console.log(str.length-i)
//         {break}
//     }else if(str.charAt(str.length-i) == vowelArr[1]){
//         console.log(str.length-i)
//         {break}
//     }else if(str.charAt(str.length-i) == vowelArr[2]){
//         console.log(str.length-i)
//         {break}
//     }else if(str.charAt(str.length-i) == vowelArr[3]){
//         console.log(str.length-i)
//         {break}
//     }else if(str.charAt(str.length-i) == vowelArr[4]){
//         console.log(str.length-i)
//         {break}
//     }


//Activity 8

// let word = "hah"
// if(word.charAt(0) === word.charAt(word.length-1)){ //word.length-1 is the method to identify the characters from the back end of the string, you can carry on by incrementing the number higher to identify further characters from the back
//     console.log("The first and last character are the same")
// }   else{
//     console.log("The first and last character are not the same")
// }

//Activity 9

// let num1 = 2
// let num2 = 4
// let num3 = (num1+num2)

// if(num3%2 == 0){
//     console.log(num3)
// }   else{
//     console.log(num1*num2)
// }


// This is a comment change!