describe('Suite', function(){
    it('Alert pop up test', function () {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        // window:alert -> https://docs.cypress.io/api/events/catalog-of-events
        // Cypress auto accepts alerts and pop-ups
        // Cypress has a capability of browser events. window:alert is the event which get fired on alert open
        // So, you are firing the event through cypress to get access to that alert
        cy.on('window-alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
            // firing event
        })
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    });
})