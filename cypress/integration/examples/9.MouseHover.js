describe('Suite 9', function () {
    it('Mouse hover Pop ups', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      //  cy.get('div.mouse-hover-content').invoke('show') // -> call jquery method 'show' on the '.container'
        cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')
        // Mouse hover events are not supoortd in cypress. Alternatively use Jquery or force click
    });
});