/// <reference types= "Cypress" />

describe ('Custom Command',  () => {  
        before(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
       })
    it('Paybill', () => {
        cy.fixture("zerobank").then (user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
        cy.get('.span12 > div > .nav').should('be.visible')
            .should('contain.text', 'Account Summary')
            .should('contain.text', 'Account Activity')
            .should('contain.text', 'Transfer Funds')
            .should('contain.text', 'Pay Bills')
            .should('contain.text', 'My Money Map')
            .should('contain.text', 'Online Statements')
        cy.contains('Pay Bills').click()
        cy.url().should('include', 'pay-bills.html')
        cy.get('#ui-tabs-1').should('be.visible')
        cy.get('#ui-tabs-1').should('be.visible')            
        cy.paybill('Apple', 'Credit Card', '10', '13', 'payment')
        cy.get('#alert_container').should('be.visible').and('contain.text', 'The payment was successfully submitted.')
        })
    })
})