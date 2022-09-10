/// <reference types="cypress" />

describe('My first Test', () =>{
    it('clicking "type" shows the right headings', () =>{
        cy.visit('https://example.cypress.io')  
        cy.pause()
        cy.contains('type').click()  
        cy.url().should('include', '/commands/actions')
        cy.get('.action-email')
            .type('meidinaym@gmail.com').should('have.value', 'meidinaym@gmail.com')
    })
})
