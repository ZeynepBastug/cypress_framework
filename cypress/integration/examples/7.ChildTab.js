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

    });

});