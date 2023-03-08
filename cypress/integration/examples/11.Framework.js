describe('Test Suite', function () {
    before(function (){
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data = data

        })
    })

    it('First Test Case ', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get("[class='form-control ng-untouched ng-pristine ng-invalid']").eq(0).type(this.data.name)
        cy.get('select').select(this.data.gender)

        cy.get("[class='ng-untouched ng-pristine ng-valid']").eq(0).should("have.value", this.data.name)

        cy.get("input[name='name']:nth-child(2)").should("have.attr", 'minlength', '2')

        cy.get('#inlineRadio3').should('be.disabled')
    })

})

describe('Second Test Suite', function () {
    it('Second Test ', function () {

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get("a[href='/angularpractice/shop']").click()

        cy.get('h4.card-title').each(($el,index, $list) => {
            if($el.text().includes("Blackberry")){
                cy.get("[class='btn btn-info']").eq(index).click()
            }
        })

    })

})
describe('Second Test Suite ', function () {
    it('Second Test with customize command ', function () {

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get("a[href='/angularpractice/shop']").click()
        cy.selectProduct("Nokia Edge")

    })

})


describe('Third Test Suite ', function () {
    before(function (){
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data = data

        })
    })
    it('Third Test case ', function () {

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get("a[href='/angularpractice/shop']").click()

        this.data.productName.forEach(function (elm){
            cy.selectProduct(elm)
        })


    })

})