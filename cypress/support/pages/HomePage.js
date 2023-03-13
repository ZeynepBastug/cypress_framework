class HomePage{
    getEditBox(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBinding(){
        return cy.get("[class='ng-untouched ng-pristine ng-valid']")
    }
    getNameInputBox(){
        return cy.get("input[name='name']").eq(0)
    }

    getEmailInputBox(){
        return cy.get("input[name='email']")
    }

    getPasswordInputBox(){
        return cy.get("#exampleInputPassword1")
    }

    getDoBbox(){
        return cy.get("input[name='bday']")
    }

    submitButton(){
        return cy.get(".btn.btn-success")
    }

    getGender(){
        return cy.get('select')
    }

    getEntrepreneaur(){
        return cy.get('#inlineRadio3')
    }

    getShopTab(){
        return cy.get("a[href='/angularpractice/shop']")
    }

    successMessage(){
        return cy.get("div[class='alert alert-success alert-dismissible'] > strong")
    }

}

export default HomePage;
//it makes this page available into all other files in your framework