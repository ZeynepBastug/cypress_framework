describe("suite", function(){
    it("visible invisible elm handling test", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("#displayed-text").as("elm").should("be.visible")

        cy.get("#hide-textbox").click()
        cy.get("@elm").should("not.be.visible")

        cy.get("#show-textbox").click()
        cy.get("@elm").should("be.visible")




    })

})