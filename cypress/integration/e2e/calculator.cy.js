describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have working number buttons', () => {
    cy.get('#number8').click();
    cy.get('.display').should('contain', '8')
  })

  it('the number buttons should update the display of the running total', () => {
    cy.get ('#number2').click()
    cy.get ('#number4').click()
    cy.get ('#number5').click()
    cy.get('#running-total').should('contain', '245')
})

  it('should update the display with the result of the operation of add ', () => {
    cy.get('#number2').click()
    cy.get('#operator-add').click()
    cy.get('#number3').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '5')
})
  it('should update the display with the result of the operation of multiply ', () => {
    cy.get('#number2').click()
    cy.get('#operator-multiply').click()
    cy.get('#number3').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '6')
  })

  it('should chain multiple operations together ', () => {
    cy.get('#number2').click()
    cy.get('#operator-multiply').click()
    cy.get('#number3').click()
    cy.get('#operator-add').click()
    cy.get('#number5').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '11')
  })

  it('should update the display with the result of the operation of multiply ', () => {
    cy.get('#number0').click()
    cy.get('#decimal').click()
    cy.get('#number5').click()
    cy.get('#operator-multiply').click()
    cy.get('#number3').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '1.5')
  })

  it('should throw an error if you try to divide by zero ', () => {
    cy.get('#number5').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 'Not allowed')
  })
})