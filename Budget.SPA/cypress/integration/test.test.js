describe('Connexion', function() {
    it('Visit cypress', function() {
        cy.visit('http://localhost:4200/');
        //clic sur bouton connexion
        cy.get('.mat-raised-button').click();
        //renseigner nom utilisateur
        cy.get('#mat-input-0').type('nico')
        .should('have.value', 'nico');
        //renseigner nom mot de passe
        cy.get('#mat-input-1').type('1234')
        .should('have.value','1234');
        //clic sur connexion
        cy.get('.submit-button').click();
        //url apres validation de la connexion
        cy.url().should('include', '/pages/home');
        //clic sur bouton entrer dans application
        cy.get('.mat-mini-fab').click();
        //controle url apres click
        cy.url().should('include', '/apps/plans');      
        
        // mock
        // cy.fixture('heroes/list.json').as('heroesList')
        // cy.route('GET', 'http://localhost:3000/products', '@heroesList');

    })
  })