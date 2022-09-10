/// <reference types="cypress" />

describe('Login / Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', '/index.html')
        cy.get('#signin_button').click()
    })
    it('Login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('.btn').click()
    })
    it('Display Error message', () => {
        cy.get('h3').should('have.text', 'Troubles entering the site?')
        cy.get('.alert').should('contain','Login and/or password are wrong.').and('be.visible')
    })
    it('Login with valid data', () => {
        cy.fixture("webapp").then(user => {
            const username = user.username
            const password = user.password
            cy.get('#login_form').should('be.visible')
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.get('.btn').click()

            cy.get('.navbar-inner > .container').should('be.visible')
            cy.get('.brand').should('have.text', 'Zero Bank').and('be.visible')
            cy.get('.span12 > div > .nav').should('be.visible')
            cy.get('.offset2 > :nth-child(1)').should('have.text', 'Cash Accounts')
            cy.get('.offset2 > :nth-child(3)').should('have.text', 'Investment Accounts')
            cy.get('.offset2 > :nth-child(5)').should('have.text', 'Credit Accounts')
            cy.get('.offset2 > :nth-child(7)').should('have.text', 'Loan Accounts')
        })
    })
    it('Logout', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('#signin_button').should('be.visible').and('contain.text', 'Signin')
        cy.get('#nav').should('be.visible')
        cy.get('#homeMenu > div').should('contain.text', 'Home')
        cy.get('#onlineBankingMenu > div > strong').should('contain.text', 'Online Banking')
        cy.get('#feedback > div').should('contain.text', 'Feedback')
    })
})