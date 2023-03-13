//import { beforeEach } from "@badeball/cypress-cucumber-preprocessor";


beforeEach(function(){
    cy.fixture('example').then(function (data){
        this.data=data
    })
})

