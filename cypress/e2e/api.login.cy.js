/// <reference types="cypress" />



describe('Login ', () => {
  
    it('Login com sucesso', () => {
    cy.request({  
      method: 'POST',  // enviar dados
      url: 'https://serverest.dev/login',
      body: {
          email: "fulano@qa.com",
          password: "teste"
      } 
     }).then((response) => {    // verificar o retorno
        // Verifica se o status é 200 e se a mensagem de sucesso está correta
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', 'Login realizado com sucesso');
        expect(response.body).to.have.property('authorization');
      });
  
  });


   it('Login com falha erro 401', () => {
    cy.request({  
      method: 'POST',  // enviar dados
      url: 'https://serverest.dev/login',

      body: {
          email: "fulano@qa.com",
          password: "teste22"
      } ,
       failOnStatusCode: false
     }).then((response) => {    // verificar o retorno
        // Verifica se o status é 200 e se a mensagem de sucesso está correta
        expect(response.status).to.eq(401);
        expect(response.body).to.have.property('message', "Email e/ou senha inválidos");
        
      });
  
  });






});