/// <reference types="Cypress" />


describe('home page',()=>{
it('app deve estar online',()=>{
    cy.viewport(1440,900)
    cy.visit('https://buger-eats-qa.vercel.app/')
    cy.title().should('be.equal','Buger Eats')
    cy.get('#page-home main h1').should('have.text','Seja um parceiro entregador pela Buger Eats')
})

})