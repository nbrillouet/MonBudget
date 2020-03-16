




//TEST OK
describe('My First Test OK', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
  })

//TEST KO
describe('My First Test KO', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(false)
    })
  })

//Visiter page
describe('Visiter page', function() {
    it('Visit cypress', function() {
      cy.visit('https://example.cypress.io')
    })
  })

  //Trouver un element
describe('Trouver un element', function() {
    it('finds the content "type"', function() {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type')
    })
  })

  //cliquer sur un element
  describe('Cliquer sur element', function() {
    it('clicks the link "type"', function() {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
    })
  })

  //creation assertion
  describe('Creation assertion', () => {
    it('clicking "type" navigates to a new url', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/commands/actions')
    })
  })

  //Creation assertion chainée
  describe('Creation assertion chainée', () => {
    it('Gets, types and asserts', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/commands/actions')
  
      // Get an input, type into it and verify that the value has been updated
      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
  })