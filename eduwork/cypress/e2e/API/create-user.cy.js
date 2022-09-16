/// <reference types = "cypress" />

describe('Create New User', () => {
    it('Success create new user', () => {
        var user = {
            "name": 'Jang Won',
            "job": 'Singer'
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
        })
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.body).to.have.any.keys('name')
        })
        cy.request('POST', 'https://reqres.in/api/users', {name : 'Jang Won'}).then((response) => {
            expect(response.body).to.have.property('name', 'Jang Won') 
        })
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.body).to.have.any.keys('job')
        })
        cy.request('POST', 'https://reqres.in/api/users', {job: 'Singer'}).then ((response) => {
            expect(response.body).to.have.property('job', 'Singer')
        })
    })
})
    