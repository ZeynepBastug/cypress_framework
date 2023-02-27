console.log("hello world")

let a=4
console.log(a)
console.log(typeof(a))

let b = "Zeynep"
console.log(b)
console.log(typeof(b))

let c = true
console.log(c)
console.log(typeof(c))

b = "Hazel"
// reassigning is allowed
console.log(b)
// let b = 3;
// console.log(b)
var d = "Hazel"
console.log(d)
var d = "Bastug"
console.log(d)

// we cannot redeclare variable with let keyword but it is possible with var

const flag = true //const is final so it cannot be reassign or declare again
// e = 80

if(!flag){
    console.log("condition satisfied")
}else {
    console.log("condition not satisfied")
}

let i = 0
while(i < 10){
    i++
    console.log(i + " printed in while loop")
}

let j =0
do{
    j++
} while (j < 20)
{
    console.log(i + " printed in do while loop")
}

console.log("**************")
let n =0
for (let k = 1; k<=100; k++){
    if(k%2 === 0 && k%5 ===0){
        n++
        console.log(k)
        if(n === 3){
            break
        }
    }
}


