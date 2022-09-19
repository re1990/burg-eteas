/// <reference types="Cypress" />
import SignupPage from '..//pages/SignupPage'
import SignupFactory from '../factories/SignupFactory'

describe('Cadastro',()=>{

    var signup = new SignupPage()
    beforeEach(function()  {
        cy.fixture('entregador').then((e) =>  {
            this.entregador = e
        })
    })

    it('Seja um entregador',function() {
        
                      
        signup.go()
        signup.fillForm(this.entregador.signup)
        signup.submit()
        signup.modalContentShouldBe()

    })

    it('Cpf incorreto',function() {
                
        signup.go()
        signup.fillForm(this.entregador.cpf_inv)
        signup.submit()
        signup.modalInvalidoCpf

    })


})