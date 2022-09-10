/// <reference types = "cypress" />

describe('Working with fixtures', () => {
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
    })
    it('Login with valid username and password', () => {
        cy.fixture("user").then(user => {
            const username = user.username1
            const password = user.password1

            cy.get('[data-test="username"]').clear()
            cy.get('[data-test="username"]').type(username)

            cy.get('[data-test="password"]').clear()
            cy.get('[data-test="password"]').type(password)

            cy.get('[data-test="login-button"]').click()
            cy.url().should('include','/inventory.html')
            cy.contains('Products').should('have.text', 'Products')
        })
    })
    it('Add some products to cart', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.wait(1000)
    })
    it('Logout', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.wait(1000)
        cy.get('#logout_sidebar_link').click()
        cy.wait(1000)
    })
    it('Login lockout user', () => {
        cy.fixture("user").then(user => {
            const username = user.username2
            const password = user.password1

            cy.get('[data-test="username"]').clear()
            cy.get('[data-test="username"]').type(username)

            cy.get('[data-test="password"]').clear()
            cy.get('[data-test="password"]').type(password)

            cy.get('[data-test="login-button"]').click()
            cy.contains('Epic sadface: Sorry, this user has been locked out.').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
        })
    })
})
