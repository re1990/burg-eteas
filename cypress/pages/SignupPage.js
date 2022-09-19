class SignupPage{

    go(){
        cy.viewport(1440,900)
        cy.visit('https://buger-eats-qa.vercel.app/')
        cy.title().should('be.equal','Buger Eats')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')

    }
    fillForm(entregador){

        cy.get('input[name="fullName"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        cy.contains('.delivery-method li', entregador.metodo_entrega).click()

        cy.get('input[accept="image/*"]').attachFile('/images/' + entregador.cnh)
     }

     submit(){
        cy.get('button[type="submit"]').click()

     }

     modalContentShouldBe(){
        cy.contains('Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.').should('be.visible')


     }

     modalInvalidoCpf(){
        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido') 


     }


}

export default SignupPage;
