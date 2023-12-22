Cypress.config('baseUrl', 'http://localhost:5173');


describe('Home Page', () => {

  before(()=>{
    cy.visit('/');
    cy.wait(1000);
    cy.get('#root').then(($root)=>{
      console.log("TA RODANDO", $root.find('.delete-button'))
      if($root.find('.delete-button').length){
        cy.get('.delete-button').then(($buttons)=>{
          if($buttons.length){
            console.log({$buttons})
            $buttons.each((index, $button) => {
              console.log("button: ",$button);
              console.log("buttons index: ",$buttons[index])
              $button.click()
            
              cy.wait(1000)
            })  
          }
          else{          
            return
          }
        })
      }
    })
  })  

  beforeEach(() => {
    // Antes de cada teste, visite a página inicial
    cy.visit('/');
  });

  it('Deve adicionar um usuário corretamente', () => {
    // Insira os valores nos campos e envie o formulário
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#participation').type('20');
    cy.get('#send-button').click();

    // Verifique se o usuário foi adicionado corretamente na tabela
    cy.get('.table-class') // substitua pela classe real da sua tabela
      .contains('John')
      .should('exist');
  });

  it('Deve adicionar um outro usuário corretamente', () => {
    // Insira os valores nos campos e envie o formulário
    cy.get('#firstName').type('Mary');
    cy.get('#lastName').type('Doe');
    cy.get('#participation').type('20');
    cy.get('#send-button').click();

    // Verifique se o usuário foi adicionado corretamente na tabela
    cy.get('.table-class') // substitua pela classe real da sua tabela
      .contains('Mary')
      .should('exist');
  });


  it('Deve excluir um usuário corretamente', () => {
    // Execute a lógica para adicionar um usuário primeiro

    // Agora, exclua o usuário
    cy.get('.delete-button') // substitua pela classe real do botão de exclusão
      .first()
      .click();

    // Verifique se o usuário foi removido da tabela
    cy.get('.table-class') // substitua pela classe real da sua tabela
      .contains('John')
      .should('not.exist');
  });

  it('Deve adicionar um outro usuário corretamente', () => {
    // Insira os valores nos campos e envie o formulário
    cy.get('#firstName').type('Harry');
    cy.get('#lastName').type('Smith');
    cy.get('#participation').type('20');
    cy.get('#send-button').click();

    // Verifique se o usuário foi adicionado corretamente na tabela
    cy.get('.table-class') // substitua pela classe real da sua tabela
      .contains('Harry')
      .should('exist');
  });

  it('Deve exibir uma mensagem de erro ao não preencher o nome', () => {
    // Insira os valores nos campos e envie o formulário
    cy.get('#lastName').type('Smith');
    cy.get('#participation').type('20');
    cy.get('#send-button').click();

    // Verifique se o usuário foi adicionado corretamente na tabela
    cy.get('.Toastify [role="alert"]') // substitua pela classe real da sua tabela
      .contains('This field may not be blank.')
      .should('exist');
  });

  it('Deve exibir uma mensagem de erro ao não preencher o sobrenome', () => {
    // Insira os valores nos campos e envie o formulário
    cy.get('#firstName').type('Leo');
    cy.get('#participation').type('20');
    cy.get('#send-button').click();

    // Verifique se o usuário foi adicionado corretamente na tabela
    cy.get('.Toastify [role="alert"]') // substitua pela classe real da sua tabela
      .contains('This field may not be blank.')
      .should('exist');
  });

  it('Deve exibir uma mensagem de erro ao não preencher a participação', () => {
    // Insira os valores nos campos e envie o formulário
    cy.get('#firstName').type('Jason');
    cy.get('#lastName').type('Todd');
    cy.get('#send-button').click();

    cy.wait(1000)
    // Verifique se o usuário foi adicionado corretamente na tabela
    cy.get('.Toastify [role="alert"]') // substitua pela classe real da sua tabela
      .contains('A valid number is required.')
      .should('exist');
  });


  it('Deve exibir uma mensagem de erro ao colocar um nome não válido', () => {
    // Insira os valores nos campos e envie o formulário
    cy.get('#firstName').type('12');
    cy.get('#lastName').type('Todd');
    cy.get('#participation').type('10');
    cy.get('#send-button').click();

    cy.wait(1000)
    // Verifique se o usuário foi adicionado corretamente na tabela
    cy.get('.Toastify [role="alert"]') // substitua pela classe real da sua tabela
      .contains("The 'firstName' field is not alpha.")
      .should('exist');
  });

  it('Deve exibir uma mensagem de erro ao colocar um sobrenome não válido', () => {
    // Insira os valores nos campos e envie o formulário
    cy.get('#firstName').type('Jason');
    cy.get('#lastName').type('12');
    cy.get('#participation').type('10');
    cy.get('#send-button').click();

    cy.wait(1000)
    // Verifique se o usuário foi adicionado corretamente na tabela
    cy.get('.Toastify [role="alert"]') // substitua pela classe real da sua tabela
      .contains("The 'lastName' field is not alpha.")
      .should('exist');
  });

  it('Deve exibir uma mensagem de erro ao colocar um participation não válido', () => {
    // Insira os valores nos campos e envie o formulário
    cy.get('#firstName').type('Jason');
    cy.get('#lastName').type('Todd');
    cy.get('#participation').type('AB');
    cy.get('#send-button').click();

    cy.wait(2000)
    // Verifique se o usuário foi adicionado corretamente na tabela
    cy.get('.Toastify [role="alert"]') // substitua pela classe real da sua tabela
      .contains("A valid number is required.")
      .should('exist');
  });
  //Adicione mais testes conforme necessário
});
