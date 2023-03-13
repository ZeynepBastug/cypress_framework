class ShopPage{

    productTitle(){
        return cy.get('h4.card-title')

    }

    addToCartButton(productName){

        cy.get('h4.card-title').each(($el,index,$list) => {
            if($el.text().includes(productName)){
                console.log(productName)
                return cy.get("[class='btn btn-info']").eq(index)
            }
        })
    }

    checkoutButton(){
        return cy.get('.nav-link.btn.btn-primary')
    }


}

export default ShopPage;