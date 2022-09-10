/// <reference types= "Cypress" />
import 'cypress-v10-preserve-cookie'

describe ('Custom Command',  () => {  
       
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
        
    })
    it('Login', () => {
        cy.preserveCookieOnce('JSESSIONID')
        cy.fixture("zerobank").then (user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
        })
    })  
    it('Paybill', () => {
        cy.contains('Pay Bills').click()
        cy.paybill('Apple', 'Credit Card', '10', '13', 'payment')
    })
})