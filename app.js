// let age = 17

// if(age < 18){
//     console.log("The Price is £8, please")
// }   else if(age >= 18){
//     console.log("The price is £10.95, please")
// }   else if(age > 60){
//     "The price is £7.50, please"
// }


// Functions

// const multiplyByNineFifths = (celsius) =>{
//     return celsius * (9/5);
// };
// const getFahrenheit = (celsius) =>{
//     return multiplyByNineFifths(celsius)+ 32
// }

// console.log("The Temperature is " + getFahrenheit(15) + " degrees Fahrenheit")

// Activity 1

// const factorial = (n) => {
//     if((n === 0) || (n === 1)) {
//         return 1;
//     }   else{
//         return (n * factorial(n-1))
//     }
// }

// console.log(factorial(7))

//Activity 2

// let orderCount = 1;

// function takeOrder (pizzaSize, topping){
//     console.log(`${pizzaSize} pizza with ${topping} for order number ${orderCount}`);
//     orderCount++;
// }

// takeOrder("Medium", "Pepperoni")
// takeOrder("Large", "Olives")
// takeOrder("Extra Large", "Extra Cheese")
// takeOrder("Small", "no Chicken")

//Activity 3

// let expectedPin = 4321;
// let currentBalance = 500;

// function moneyRequest (moneyAmount) {
//     if(moneyAmount > currentBalance){
//         console.log(`I'm sorry, your current balance is ${currentBalance}. Please select another amount, or select another service.`);
//     } else if(moneyAmount <= currentBalance){
//         console.log(`Thank you for your request. ${moneyAmount} will be despensed shortly. your new balance is ` + (currentBalance - moneyAmount));
//     }
// }

// function pinEntry (pinNumber){
//     if(pinNumber != expectedPin){
//         console.log("Sorry, your PIN Number is incorrect, please take your card and try again.");
//     }   else if(pinNumber == expectedPin){
//             console.log("Thank you, please wait a moment while we verify your information.");
//             moneyRequest(500);
//     }    
// }
    
// pinEntry(4321)

//Supplementary Challenge 1

// function string (example){
//     console.log(`something ${example}`)
// }

// string("is giving me a bad feeling about this.")
// string("is better than nothing, I suppose")
// string("something something darkside, something something something complete")

//Supplementary Challenge 2

// function perimeter (length, width){
//     let result = (length*2) + (width*2)
//     console.log(`The perimeter of this rectangle is ${result}cm`)
// }

// perimeter(12, 4)
// perimeter(25, 36)
// perimeter(102, 13)

//Supplementary Challenge 3

function largeNum (num1, num2){
    if(num1 > num2){
        console.log(`${num1} is larger than ${num2}`)
    }else if(num2 > num1){
        console.log(`${num2} is larger than ${num1}`)
    }else if(num1 == num2){
        console.log(`${num1} and ${num2} are of the same value`)
    }
}

largeNum(12, 9)
largeNum(3, 99)
largeNum(36, 47)
largeNum(51, 82)
largeNum(22, 22)