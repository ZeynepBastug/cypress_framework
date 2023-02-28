/**
 * Inheritance is the Man Pillar in Object oriented Programming
 * One class can inherit/acquire the properties, methods of another class
 * The class which inherits the propeties of other is known as subclass (derived class, child class)
 * The class whose properties are inherited is known as superclass
 *
 */

const Person = require("./basics6")

class Pet extends Person{

    constructor(firstName, LastName) {
        // call parent class constructor
        super();

    }

    get Location(){
        return "BlueCross"
    }

}