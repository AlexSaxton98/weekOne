// let coffeeOrder = [
//     "Alex - Hot Chocolate",
//     "Ben - Cappucino",
//     "Charlie - Latte",
// ];

// console.log(coffeeOrder[1]); // Will log the second item in the array

// coffeeOrder[1] = "Ann - Ice Latte"; // Will change the second item in the array

// console.log(coffeeOrder[1]); // Will log the updated array

// console.log(coffeeOrder.length);// .length on an array will output the number of items in an array NOT the number of characters

// coffeeOrder.push("Donna - Espresso"); // .push will add an item to the end of the array

// console.log(coffeeOrder)

// coffeeOrder.pop(); // .pop will remove the last item from the array.




//Arrays Activity 1

// let favouriteSong = [
//     "Imperial March - John Williams",
//     "Might+U - Yuki Hayashi",
//     "Portals - Alan Silvestri",
// ]

// // console.log(favouriteSong)

// favouriteSong.unshift("Binary Sunset - John Williams")
// favouriteSong.push("I am The Doctor - Murray Gold")
// favouriteSong.pop()

// // console.log(favouriteSong)

// for (let i = 0; i < 4; i++){
//     console.log(favouriteSong[i])
// }


// let multipleTwo = []

// for (i = 0; i < 20; i++){
//     if (i%2 == 0){
//         multipleTwo.push(i)
//     }
// }
// console.log(multipleTwo)

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while(currentCard != "Spade"){
//     console.log(currentCard)
//     currentCard = cards[Math.floor(Math.random()*4)]
// }

// console.log(currentCard)


//Loops Activity 1

// favMovies = ["Return of the Jedi", "Avengers Endgame", "Iron Man", "Doctor Strange", "The Last Jedi"]

// favMovies.push("My Hero Academia - Heroes Rising")
// favMovies.unshift("The Empire Strikes Back")

// for (let film = 0; film < favMovies.length; film++){
//     console.log(favMovies[film])
// }

//Loops Activity 2

// for(let i = 0; i < 6; i++){
//     console.log(Math.round(Math.random()*50)) //generates a random number between 1 and 50
// }

//Loops Activity 3

// for(let num = 9; num >= 0; num--){
//     console.log(num)
// }

//Loops Activity 4

// let films = ["Hot Fuzz", "Akira", "Iron Man", "Spiderman"]

// for(let i = 0; i < films.length; i++){
//     if(i == 2 && films[2] == "Ghostbusters"){ //code checking specifically if Ghostbusters is the third movie in the array
//         console.log("Yay, Ghostbusters!")
//     }   else if(i == 2 && films[2] != "Ghostbusters"){
//         console.log("Boo, we want Ghostbusters!")
//     }   else{
//         console.log(films[i])
//     }
// }

//Activuty 5

// for(let i = 0; i < 6; i++){
//     let num = (Math.round(Math.random()*30)) 
//     if (num % 7 == 0){
//         console.log(`${num} can be divided by seven`)
//     }   else{
//         console.log(`${num} cannot be divided by seven`)
//     }
// }

//Loops Activity 6

// let bobFollowers = ["Dave", "Matthew", "James", "Holly"]
// let hannahFollowers = ["Thomas", "Carol", "Holly", "Matthew"]

// for(i = 0; i < bobFollowers.length; i++){
//     for(x = 0; x < hannahFollowers.length; x++)
//     if(bobFollowers[i] == hannahFollowers[x]){
//         console.log(bobFollowers[i])
//     }
// }


//Loops Activity 7

// let result = ""
// let i = 0

// do {  //Everything that is contained within the "do" statement is executed everytime the code loops through. 
//     i += 1;
//     result += i;
// } while (i < 5) //In this case the code loops through "while" the statement in this line of code remains true. Once i is greater than 5, the loop will stop

// console.log(result) // expected result is 12345, as result is declared as a string, the intergers are converted into a string rather than being added together.

//While loops through a block of code as long as the specified condition evaluates to true
// Do... While loops through a block of code once and then evaluates the condition. If the condition is true, then the statement is repeated as long as the specified condition is true
// For loops though a block of code until the counter reaches a specified number.

//For is much more straight forward for doing a specified amount of tasks, however it is more limited by how specific it must be
// While loops operate on booleans, so can have a much wider range of conditions compared to for loops
//Do...While loops are useful for executing specific blocks of code while evaluating the statement every time