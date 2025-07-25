/// <reference types="cypress" />


describe('Cadstro com sucess ', () => {
  
    it('Login com sucesso', () => { 
        cy.request({  
            method: 'POST',  
            url: 'https://serverest.dev/usuarios',
            body: {
                "nome": "Fulano da Silva",
                "email": "beltrana@qa3.com.br",
                "password": "teste",
                "administrador": "true"
            }
        }).then((response) => {    // verificar o retorno
            // Verifica se o status é 200 e se a mensagem de sucesso está correta
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
            //expect(response.body).to.have.property('authorization');
        });
    });

});