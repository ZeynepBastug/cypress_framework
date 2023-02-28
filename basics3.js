/**
 * block of code
 * var - global level/functional
 * let global level/ block level {}
  */
let greet = "Evening"
var geeting = "Hello"
const timeline = "Evening" // final!

if(true){
    let greet = "Afternoon"
    var greeting = "Hiiii"
}

function add(a,b){
    var greeting = "Merhaba"
    let greet = "Morning"
   return a+b
}

let sum = add(2,3)
console.log(sum)
console.log(greet)
console.log(greeting)

// do not have name => Anonymous function-- Function expressions
let sumOfInts = function (c,d){
    return c+d
}

let sumOfNums = ((c,d) => c+d)
console.log(sumOfNums(5,6))