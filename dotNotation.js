//console.log("Hello World".toUpperCase());
//console.log("My name is Alex Saxton")
//console.log("I am 23 Years Old")
//console.log("I'm a big ol' nerd")

// console.log(Math.trunc(Math.random()*10)); // removes fractional numbers or decimal places
// console.log(Math.round(Math.random()*10)); //rounds to nearest interger
// console.log(Math.floor(Math.random()*10)); //rounds down to nearest interger
// console.log(Math.ceil(Math.random()*10)); //rounds up to nearest interger

// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("-----------")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("-----------")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")



// console.log(vert)
// console.log(vert)
// console.log(vert)
// console.log(horz)
// console.log(vert)
// console.log(vert)
// console.log(vert)
// console.log(horz)
// console.log(vert)
// console.log(vert)
// console.log(vert)

vert = "   |   |   "
horz = "-----------"

for (let i = 0; i <11; i++){
    if (i == 3 || i == 7){
        console.log(horz)     
    }   else {
        console.log(vert)
    }
}

