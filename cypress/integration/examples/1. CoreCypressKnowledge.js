// Spec file is equivalent of java class or test file
/// <reference types="Cypress" /> for Visual Studio
describe('My First Test Suite', function(){
    it('My FirstTest case', function (){
        //https://rahulshettyacademy.com/#/ -> practice website

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type("ca")

        cy.wait(2000)
        // selenium get hit url in browser, cypress gets acts like findElement of selenium
        cy.get(".product:visible").should("have.length", 4)
        //parent child chaining

        cy.get(".products").find(".product").should("have.length", 4)
        // find method only looks for DOM element under parent tag.

        cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click()

        console.log('sf')

        cy.get(".products").as("product")
        cy.get("@product").find(".product")
            .each(($el, index, $list) => {
               const textVeg = $el.find("h4.product-name").text()
                if(textVeg.includes("Cashews")) {
                    cy.wrap($el).find("button").click()
                }
        })

        // assert if logo text is correctly displayed
        cy.get(".brand").should("have.text", "GREENKART")

        // this is to print in logs
        cy.get(".brand").then(function(logoElement) {
            cy.log(logoElement.text())
        })

        //const logo = cy.get(".brand")
        // cy.log(logo).text()

        cy.get(".cart-icon").as("shoppingBagButton")
        cy.get("@shoppingBagButton").click()

        cy.get(".action-block").find("button:visible").click()

        cy.contains("Place Order").click()




    })
})