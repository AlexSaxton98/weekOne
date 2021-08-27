// person = {
//     name: "Alex Saxton",
//     age: 23,
//     favSongs: [
//         "The Big Breakfast - Tom Cardy",
//         "The Imperial March - John Williams",
//         "Portals - Alan Silvestri",
//     ]
// }



// console.log(person.favSongs)






// console.log(person.name)
// console.log(person["name"])

// let offer = "none";
// let time = 1200;

// const cafe = { // Objects are declared as constants so that they wont be changed later.
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffer: true,
//     drinks: [
//         "Cappucino",
//         "Latte",
//         "Filter Coffee",
//         "Tea",
//         "Hot Chocolate"
//     ],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry, there is no offer",
//     openCafe(){
//         if(this.hasSpecialOffer){  // This is used to identify if the key is within the object and not the global scope
//             return "Time for a special offer!";
//         }
//     },
//     closeCafe(){
//         return "We are closed, come back tomorrow!"
//     }
// };


// console.log(cafe.openCafe());

// Alarm

// let day = "Sunday"
// alarm = ""

// const alarmClock = {
//     weekdayAlarm: "BEEP! BEEP! BEEP! Get up at 9am!",
//     weekendAlarm: "No alarm needed",
// }

// if(day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday"){
//     alarm = alarmClock.weekdayAlarm
// }   else if(day == "Saturday" || day == "Sunday"){
//     alarm = alarmClock.weekendAlarm
// }

// console.log(alarm)




//Activity 1

// person = {
//     name: "Alex Saxton",
//     age: 23,
//     height: "5 foot 6 inches",
//     hairColour: "Brown",
//     favColour: "Blue",
//     favSongs: [
//         "The Big Breakfast - Tom Cardy",
//         "The Imperial March - John Williams",
//         "Portals - Alan Silvestri",
//     ],
//     sayHi(){
//         return `Hello, my name is $this.name`
//     },
//     ageCheck(theirAge){
//         if(theirAge < this.age){
//             console.log(`You're only ${theirAge}? I think you're a bit too young to be hanging around with me.`)
//         }   else if(theirAge == this.age){
//             console.log(`You're ${theirAge}? Me too! I'm ${this.age} as well!`)
//         }   else if(theirAge > this.age+10){
//             console.log("I've always been told to respect my elders.")
//         }   else if(theirAge > this.age){
//             console.log(`Sorry, but I don't like hanging around with people much older than me. You're only ${theirAge}?! Ummm... well the point still stands`)
//         }   
//     }
    
// }

// console.log(person.sayHi()) // When calling a function from within an object, the function (or method) requires an empty set of brackets for the console.log to complete the function

// if(person.favColour == "Red"){
//     console.log("Wow, Red is my favourite colour too!")
// }   else{
//     console.log(`Your favourite colour is ${person.favColour}? That's fine I guess.`)
// }

// person.ageCheck(33)


//Activity 2

// pet = { 
//     name: "Charlie",
//     typeOfPet: "Dog",
//     breed: "Bedlington Terrier",
//     age: 4,
//     colour: "Cream",

//     eat(){
//         console.log(`${this.name} is eating. Don't interrupt him or you'll make him cross!`)
//     },
//     drink(source){
//         if(source == "Bowl"){
//             console.log(`${this.name} is drinking from a bowl, what a good boy!`)
//         }   else if(source == "Puddle"){
//             console.log(`${this.name.toUpperCase()}! Get away from that ${source}, you naughty boy!`)
//         }
//     },
//     whatBreed(){
//         console.log(`${this.name}'s a ${this.breed}. Yeah he does look like a sheep doesn't he?`) //seriously look up Bedlington Terriers they look like little sheep.
//     },
//     howOld(){
//         console.log(`How old is ${this.name}? Well he's around ${this.age} years old, which is roughly ${this.age*7} in ${this.typeOfPet} years`)
//     }
// }

// pet.howOld()


//Activity 3

//Attempt 1, using nested arrays to list the food and drinks. This failed as when it came time to call them in the Order functions, I couldn't find a way
//to call the second item in the arrays that had already been called by the perameters of Order methods

// i = 0

// coffeeShop = {
//     branch: "Blacksheep",
//     drinks:[
//         ["Coffee", 2],
//         ["Latte", 2.50],
//         ["Cappucino", 2.50],
//         ["Tea", 1.75]
//     ],
//     food:[
//         ["Sandwich", 4],
//         ["Panini", 4.75],
//         ["Cookie", 1.25]
//     ],

//     drinksOrdered(dOrders){
//         console.log(dOrders)
//     },
//     foodOrdered(fOrders){
//         console.log(fOrders)
//     },
//     totalOrder(){
//         this.drinksOrdered(this.drinks[1][i], this.drinks[2][i])
//             let drinkCost = 
//         this.foodOrdered(`Your order is ${this.food[1][0]}, ${this.drinks[2][0]}`)
//         console.log
//     }


// }

// coffeeShop.totalOrder()


//Attempt 2

drinksArray = []
drinksCostArray = []
foodArray = []
foodCostArray = []

coffeeShop = {
    branch: "Blacksheep",
    drink1: ["Coffee", 2],
    drink2: ["Latte", 2.50],
    drink3: ["Cappucino", 2.50],
    drink4: ["Tea", 1.75],
    food1:  ["Sandwich", 4],
    food2:  ["Panini", 4.75],
    food3:  ["Cookie", 1.25],
    blank:"",
    drinksOrdered(drinksOrder1, drinksOrder2, drinksOrder3, drinksOrder4){

        if(drinksOrder4 == "" && drinksOrder3 =="" && drinksOrder2 == ""){
            console.log(`Thank you for your order, that will be a ${drinksOrder1}`)
        }   else if(drinksOrder4 == "" && drinksOrder3 == ""){
            console.log(`Thank you for your order, that will be a ${drinksOrder1} and a ${drinksOrder2}`)
        }   else if(drinksOrder4 == ""){
            console.log(`Thank you for your order, that will be a ${drinksOrder1}, a ${drinksOrder2} and a ${drinksOrder3}`)
        }   else{
            console.log(`Thank you for your order, that will be a ${drinksOrder1}, a ${drinksOrder2}, a ${drinksOrder3} and a ${drinksOrder4}`)
        }
        
        
    },

    foodOrdered(){

    }

}

coffeeShop.drinksOrdered(coffeeShop.drink1[0], coffeeShop.drink1[0], coffeeShop.blank, coffeeShop.blank)


