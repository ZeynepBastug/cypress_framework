describe('Suite', function () {
    it('Child tab', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').invoke('removeAttr', 'target')
        // Cypress doesn't support switching tabs
        // Cypress recommend us to 1. check if target attribute is present. if it is present then it will switch to the new window tab
        // 2. Open the same page so, we need to manipulate the DOM (Cypress allow us to manipulate the DOM)
        cy.get('#opentab').click()

        // Navigating Back or Forward
        cy.url().should('include', 'www.rahul')

        cy.go('back')
        cy.url().should('include', 'com/AutomationPractice/')

        //Cypress doesn't support cross domain
    });

});

describe('Suite', function () {
    it('Handling Child Windows using Cypress', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function (elm){
            const url = elm.prop('href')
            cy.log(url)
            cy.visit(url)
            // Cypress doesn't support cross domain
            // this test will fail because visit() method doesn't support different domain
        })



    });

});