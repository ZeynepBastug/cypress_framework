
describe("Second Test Suite", function (){
    it('Second Test Case', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("#checkBoxOption1").check().should('be.checked')
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked")

        cy.get("input[type='checkbox']").check(["option2", "option3"])






    });
})