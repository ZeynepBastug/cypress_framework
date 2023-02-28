// object is collection of properties

let person = {
    firstname: 'Tim',
    lastName: 'Joe',
    age: 32,
    fullName: function(){
        console.log(this.firstname + " " + this.lastName )
    }

}
console.log(person.fullName())
console.log(person.lastName)
console.log(person['lastName'])

// updating existed property
person.firstname = 'Tim Dane'
console.log(person.firstname)

// creating a new property
person.gender = 'male'
console.log(person)

// deleting an existed property
delete person.gender
console.log(person)

// checking if the object has the property -> returns boolean
console.log('gender' in person)

// Print all the values of the js object
for(let key in person) {
    console.log(person[key])
}