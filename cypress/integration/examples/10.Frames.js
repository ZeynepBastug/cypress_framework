
import 'cypress-iframe'

describe('Suite', function () {
    it('Handling Frames ', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe')
        // switching cypress focus to iframe
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)

    });
});