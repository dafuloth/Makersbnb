describe('Book Space', function() {
  it('user books a space', function(){
    cy.visit('/signUp')
    cy.get('#username').type("steve")
    cy.get('#email').type("username@email.com")
    cy.get('#password').type("abc123")
    cy.get('#sign-up').click()
    cy.get('#username').type("steve")
    cy.get('#password').type("abc123")
    cy.get('#sign-in').click()
    cy.get("#header").should('contain', 'steve')

    cy.get('#add-space-input').click()
    cy.get('#spaceName').type("Mansion")
    cy.get('#spacePrice').type(600.00)
    cy.get('#spaceDescription').type("For that once in a lifetime experience!")
    cy.get('#submitSpace').click()

    // cy.get('#spaceName').type("Mansion")
    // cy.get('#spacePrice').type(600.00)
    // cy.get('#spaceDescription').type("For that once in a lifetime experience!")

    // old-test
    // cy.get('#spaceFlat').click()
    // cy.get('#pageTitle').should('contain', 'Flat')
    // cy.url().should('contain', '/space?') 

    cy.get('#spaceMansion').click()
    cy.url().should('contain', '/space?') 
    cy.get('#pageTitle').should('contain', 'Mansion')

    cy.get('#spacesContainer').should('contain', 'For that once in a lifetime experience!')
    cy.get('#spacesContainer').should('contain', '600.00')

  })
})
