/// <reference types="cypress" />

describe('Working with inputs', () =>  {

    it('visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')   
    })
    it ('Should fill username', () => {
        cy.get('input[name="user_login"]').clear()
        cy.get('#user_login').type('username')
    })
    it ('Should fill password', () => {
        cy.get('#user_password').clear()
        cy.get('input[name="user_password"]').type('password')
    })
    it ('Should turn on keep me sign in', () => {
        cy.get('#user_remember_me').click()
    })
})
