describe('Suite 8', function () {
    it('Handling Web Tables', function () {


        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('tr td:nth-child(2)').each(($el,index,$list) => {
            const text = $el.text()
            if(text.includes("Python")){
                // cy.get('tr td:nth-child(2)').eq(index).next()
                cy.wrap($el).next().then(function (price){
                    // you can traverse to siblings with next() and it works only on get
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })

            }
        })
    });
});