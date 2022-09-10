// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)
    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password)
    cy.get('#user_remember_me').click()
    cy.get('input[name="submit"]').click()
})

Cypress.Commands.add("paybill", (payee, account, amount, date, description) =>{
    cy.get('#sp_payee').select(payee)
    cy.get('#sp_account').select(account)
    cy.get('#sp_amount').type(amount)
    cy.get('#sp_date').click()
    cy.contains(date).click()
    cy.get('#sp_description').type(description)
    cy.get('#pay_saved_payees').click() 
})

Cypress.Commands.add("preverseAllCookiesOnce", () => {
    cy.getCookies().then((cookies) => {
        const nameOfCookies =cookies.map((c) => c.name)
        Cypress.cookies.preserveOnce(...nameOfCookies)
    })
})
