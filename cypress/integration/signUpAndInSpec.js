describe('Sign up', function() {
  it('signs up and sign in', function(){
    cy.visit('views/signUp.html')
    cy.get('#username').type("username")
    cy.get('#email').type("username@email.com")
    cy.get('#password').type("abc123")
    cy.get('#sign-up').click()
    cy.get('#username').type("username")
    cy.get('#password').type("abc123")
    cy.get('#sign-in').click()
    cy.get("#header").should('contain', 'username')
  })
})
