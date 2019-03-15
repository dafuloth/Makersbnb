describe('Get all spaces',function(){
  it('Has buttons showing all the spaces',function(){
    cy.visit('/')
    cy.get('#spaceFlat').should('contain','Flat')
    cy.get('#spaceHome').should('contain','Home')
  })
})
