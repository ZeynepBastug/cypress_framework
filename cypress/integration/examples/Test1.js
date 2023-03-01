// Spec file is equivalent of java class or test file
/// <reference types="Cypress" /> for Visual Studio
describe('My First Test Suite', function(){
    it('My FirstTest case', function (){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type("ca")

        cy.wait(2000)
        // selenium get hit url in browser, cypress gets acts like findElement of selenium
        cy.get(".product:visible").should("have.length", 4)

    })
})