

 module.exports = class Person {
    age = 25

    // location = "canada"
    get location() {
        return "canada"
    }
    // constructor is method which executes by default when you create object og the class
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    // method
    fullName(){
        console.log(this.firstName + " " + this.lastName)
    }

}


//
// let person = new Person("Tim", "Joe")
// let person1 = new Person("Chris", "Jones")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person1.fullName())




