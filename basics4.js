const Person = require('./basics6')

let day = 'tuesday '
console.log(day.length) //7
let subDay = day.slice(0,4)
console.log(subDay)
console.log(day[1])

let splitDay = day.split("s")
//tue  (s)  day
console.log(splitDay[0])
console.log(splitDay[1])

console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)

let date = '23'
let nextDate = '27'
// let diff = nextDate - date -> error you need to parse to int
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
diff.toString()

let newQuote = day + "is Funday"
console.log(newQuote)
let val = newQuote.indexOf("day", 5)
console.log(val)

//tuesday is Funday
let count = 0
let value = newQuote.indexOf("day")
while(value !== -1){
    count++
    value = newQuote.indexOf("day", value+1)
}
console.log(count)

let person2 = new Person("Hazel", "Bastug")
console.log(person2.fullName())
