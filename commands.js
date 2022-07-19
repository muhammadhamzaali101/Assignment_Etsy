import 'cypress-file-upload';
import '@4tw/cypress-drag-drop'
Cypress.Commands.add('LoadingWeb',() =>{

    cy.log("LOADING WEBSITE")
    cy.visit("https://www.etsy.com")

})

//Signup/login form opening
Cypress.Commands.add('OpenForm',() =>{
    
        cy.get('#gnav-header-inner > div.wt-flex-shrink-xs-0 > nav > ul > li:nth-child(1) > button').should('be.visible').contains('Sign in').click()
})

Cypress.Commands.add('verifyHome',() =>{
    
    cy.wait(2000)
    cy.get('h1.welcome-message-text:nth-child(1)').should('be.visible')

})


Cypress.Commands.add('verifyLogInAndSignOut',() =>{
    
    
    cy.get('#gnav-header-inner > div.wt-flex-shrink-xs-0 > nav > ul > li:nth-child(3) > div > button > span.wt-menu__trigger__label > img').should('be.visible').click()

    cy.get('#gnav-header-inner > div.wt-flex-shrink-xs-0 > nav > ul > li:nth-child(3) > div > div > ul > li:nth-child(7) > a > div.wt-ml-xs-2.wt-flex-grow-xs-1 > p')
    .should('be.visible').click()
    
})


Cypress.Commands.add('input',(sel, temp) =>{
    
    
    cy.get(sel).should('be.visible').clear().type(temp,{force:true}).should('have.value', temp)
})

