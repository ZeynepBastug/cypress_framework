class HomePage{
    getEditBox(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBinding(){
        return cy.get("[class='ng-untouched ng-pristine ng-valid']")
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

}

export default HomePage;
//it makes this page available into all other files in your framework