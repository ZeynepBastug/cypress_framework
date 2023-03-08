class CheckoutPage{

    checkoutButton(){
        return cy.get('.btn.btn-success')
    }

    inputBox(){
        return cy.get("#country")
    }

    termAndConditionCheckbox(){
        return cy.get("#checkbox2")
    }

    purchaseButton(){
        return cy.get('.btn.btn-success.btn-lg')
    }

    successMessage() {
        return cy.get('.alert.alert-success.alert-dismissible')
    }

    totalcolumn(){
        return cy.get("tr > td:nth-child(4) > strong")
    }

    totalPrice(){
        return cy.get("h3 >strong")
    }
}

export default CheckoutPage;