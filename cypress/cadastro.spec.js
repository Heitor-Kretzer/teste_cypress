describe('Formulário de Cadastro', () => {
    beforeEach(() => {
        cy.visit('caminho/para/seu/cadastro.html'); // Altere para o caminho correto do seu arquivo HTML
    });

    it('deve exibir mensagem de erro se campos obrigatórios estiverem vazios', () => {
        cy.get('button').click();
        cy.get('#mensagem').should('contain', 'Todos os campos são obrigatórios.');
    });

    it('deve exibir mensagem de erro se as senhas não corresponderem', () => {
        cy.get('#nome').type('Teste');
        cy.get('#email').type('teste@exemplo.com');
        cy.get('#senha').type('senha123');
        cy.get('#confirmarSenha').type('senha456');
        cy.get('button').click();
        cy.get('#mensagem').should('contain', 'As senhas não correspondem.');
    });

    it('deve exibir mensagem de sucesso para cadastro bem-sucedido', () => {
        cy.get('#nome').type('Teste');
        cy.get('#email').type('teste@exemplo.com');
        cy.get('#senha').type('senha123');
        cy.get('#confirmarSenha').type('senha123');
        cy.get('button').click();
        cy.get('#mensagem').should('contain', 'Cadastro realizado com sucesso!');
    });
});
