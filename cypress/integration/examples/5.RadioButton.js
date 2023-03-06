describe('Suite', function (){
    it('Radio Button Handling Test', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("[value='radio1']").check().should("be.checked")
    });
})