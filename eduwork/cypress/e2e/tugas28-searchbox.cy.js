/// <reference types = "cypress" />

describe('Searchbox test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', '/index.html')
        cy.get('.brand').should('have.text', 'Zero Bank')
        cy.get('.navbar-inner > .container').should('be.visible')
    })
    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
    })
    it('Should show search result page', () => {
        cy.get('h2').should('contain.text', 'Search Results:')
        cy.contains('The following pages were found for the query: online').should('be.visible')
        cy.get('a'). should('be.visible')
            .should('contain.text', 'Zero - Free Access to Online Banking')
            .should('contain.text', 'Zero - Online Statements')   
    })
})