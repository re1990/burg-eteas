/// <reference types="Cypress" />


describe('Banco do Erro',()=>{
    it('Cadastro do banco',()=>{
        cy.viewport(1440,900)
        cy.visit('https://bugbank.netlify.app/')
        cy.title().should('be.equal','BugBank | O banco com bugs e falhas do seu jeito')
        cy.get('.pages__Title-sc-1ee1f2s-4').should('have.text','O banco com bugs e falhas do seu jeito')

        cy.get('.ihdmxA').click()
        cy.get('.#__next div[class="card__register"]')
    })
    
    })