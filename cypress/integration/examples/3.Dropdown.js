describe('Dropdown practice Suite', function () {
    it('Dropdown Practice Test', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //static dropdown
        cy.get("#dropdown-class-example").select("option2").should("have.value", "option2")

        // dynamic dropdown
        cy.get("#autocomplete").type("tu")
        cy.get("li[class= 'ui-menu-item']>div").each(($el, index, $list) => {
            if($el.text() === "Turkey"){
                cy.wrap($el).click();
            }
        })
    });
});