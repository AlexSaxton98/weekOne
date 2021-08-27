// console.log("Hello World");

// let name = "Alex";
// console.log(name); 
// name = "John";
// console.log(name)
//The slash through name is because JavaScript USED to use name for something, but doesn't anymore


// const myName = "Alex"
// console.log(myName);
// myName = "John"
// console.log(myName); 
//Because myName is called as a constant, it cannot be changed later down the line


// let i = 10;
// // i =  i + 2
// i+=2

// console.log(i)


// let favDrink = "Diet Pepsi"
// console.log("my favourite drink is " + favDrink)
// console.log(`Hello, my favourite drink is ${favDrink}`) 
//This is called a Template literal, used to insert variables into a string of text in a much cleaner manner that adding them in manually


//1.2 Variables and Operators activities

//Activity 1

let personName = "Kevin"
let personAge = "29"
let personFavColour = "purple"

console.log(`Hi, my name is ${personName}, I'm ${personAge} years old and I love the colour ${personFavColour}, it's just the best!`)

personFavColour ="Greenish Purple"
personName = "Daniel"
personage ="32"

console.log(`Well, my name is ${personName}, and as I'm ${personAge} now, I feel no shame in admitting that my favourite colour is ${personFavColour}. What do you mean that's not a colour?`)

//Activity 2

let breakfast = "Cereal"
let lunch = "Sandwich"
let dinner = "Pizza"

console.log(`This morning I had ${breakfast} for my breakfast, then later I think I'm going to have a ${lunch} for lunch and possibly a ${dinner} for my dinner.`)

breakfast = "Cereal again"
lunch = "Pasta"
dinner = "Pie and Chips"

console.log(`Tomorrow, I'll probably have ${breakfast} in the morning, with some of my leftover ${lunch} for lunch. In the evening I'm planning on having ${dinner}.`)

//Activity 3

console.log(Date())

const oneDay = 24 * 60 * 60 * 1000; 
const myBirthday = new Date(2022, 7, 27);
const currentDate = new Date(2021, 8, 24);

const diffDays = Math.round(Math.abs((myBirthday - currentDate) / oneDay));

console.log (diffDays)

const nextBirthday = "27 Jul 2022"
const oneDay = 24*60*60*1000
let diffDays = Math.round((Date.parse(nextBirthday) - Date.now() ) / oneDay)
console.log(diffDays)


//Activity 4

let space1 = "X"
let space2 = "O"
let space3
let space4 = "X"
let space5 = "X"
let space6
let space7 = "O"
let space8
let space9

console.log(` ${space1} | ${space2} |   `)
console.log(`   |   |   `)
console.log(`   |   |   `)
console.log(`-----------`)
console.log(`   |   |   `)
console.log(` ${space4} | ${space5} |   `)
console.log(`   |   |   `)
console.log(`-----------`)
console.log(`   |   |   `)
console.log(` ${space7} |   |   `)
console.log(`   |   |   `)
