import HomePage from "../../support/pages/HomePage";
import ShopPage from "../../support/pages/ShopPage";
import CheckoutPage from "../../support/pages/CheckoutPage";


describe('First Test Suite', function () {
    before(function (){
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data = data

        })
    })

    it('HomePage Test Case', function () {
        Cypress.config('defaultCommandTimeout', 10000)
        const homePage= new HomePage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select("Female")
    })

})

describe('Third Test Suite ', function () {
    before(function (){
        // runs once before all tests in the block
        cy.fixture('example').then(function (data){
            this.data = data
        })


        })
    it('purchase test case ', function () {
        const homePage = new HomePage()
        const shopPage = new ShopPage()
        const checkoutPage = new CheckoutPage()
        Cypress.config('defaultCommandTimeout', 10000)
        // timeout time only expanded for this specific test case! if you change from config file it will apply to all test cases
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        homePage.getShopTab().click()
        this.data.productName.forEach(function(elm){
          cy.selectProduct(elm)
        })

        shopPage.checkoutButton().click()
        checkoutPage.checkoutButton().click()

        checkoutPage.inputBox().type("Turkey")


        cy.get("div[class='suggestions']>ul>li>a").click()

        checkoutPage.termAndConditionCheckbox().click({force: true})
        checkoutPage.purchaseButton().click()

        checkoutPage.successMessage().then(function (elm) {
            const actualText = elm.text()
            expect(actualText.includes("Success")).to.be.true
        })


       // shopPage.addToCartButton("Blackberry").click()

    })

})

describe('Third Suite Parsing ', function () {
    before(function(){
        cy.fixture('example').then(function (data){
            this.data = data
        })
    })
    it('converting from string to number', function () {

        const homePage = new HomePage()
        const shopPage = new ShopPage()
        const checkoutPage = new CheckoutPage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        homePage.getShopTab().click()
        this.data.productName.forEach(function(name){
            cy.selectProduct(name)
        })

        shopPage.checkoutButton().click()

        var actualTotalPrice =0

        checkoutPage.totalcolumn().each(($el, index, $list) => {
            var price = $el.text().trim().split(" ")
            actualTotalPrice += Number(price[1])
        }).then(function(){
            cy.log(actualTotalPrice)
            // putting log into then function to run this line after iteration above.
        })

        checkoutPage.totalPrice().then(function(elm){
            const amount = elm.text()
            var res =amount.trim().split(" ")
            expect(Number(res[1])).to.equal(actualTotalPrice)
        })



    });

});