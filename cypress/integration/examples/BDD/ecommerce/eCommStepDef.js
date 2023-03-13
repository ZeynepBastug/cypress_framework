import { Given, When, Then, But} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../support/pages/HomePage";
import ShopPage from "../../../../support/pages/ShopPage";
import CheckoutPage from "../../../../support/pages/CheckoutPage";


const homepage = new HomePage()
const shopPage = new ShopPage()
const checkoutPage = new CheckoutPage()

Given(/^I open ECommerce Page/, () => {
    cy.visit(Cypress.env('url'))
})


When("I add items to Cart", function() {
    homepage.getShopTab().click()

    this.data.productName.forEach(function(name){
        cy.selectProduct(name)
    })

    shopPage.checkoutButton().click()
})

//     And Validate the total prices
When("Validate the total prices", () => {
    var totalAmount =0
    checkoutPage.totalcolumn().each(($el, index, $list) => {
        const amount = $el.text()
        var res = amount.trim().split(" ")
        res = res[1]
        totalAmount += res
    })
    var amount = 0
    checkoutPage.totalPrice().each(($el, index, $list)=>{
        amount = $el.text()
        var res = amount.trim().split(" ")
        res = res[1]
        amount = res
    })

    expect(totalAmount).to.equal(amount)

})


Then("Select the country, submit and verify Thank You message", () => {

    checkoutPage.checkoutButton().click()
    checkoutPage.purchaseButton().click()

    checkoutPage.successMessage().then(function (elm){
        expect(elm.text().includes("Thank you")).to.be.true
    })

})
When(/^I fill out the form details$/,  function(dataTable)
{
    homepage.getNameInputBox().type(dataTable.rawTable[1][0])
    homepage.getEmailInputBox().type(dataTable.rawTable[1][2])
    homepage.getPasswordInputBox().type(dataTable.rawTable[1][3])
    homepage.getGender().select(dataTable.rawTable[1][1])

});
When (/^I click the Submit button$/, function () {
    homepage.submitButton().click()

});
Then (/^Success message is shown$/, function () {
    homepage.successMessage().then(function (elm){
        expect(elm.text().includes("Success")).to.be.true
    })
});


