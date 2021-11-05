describe('TODOs page', () => {
    it('should delete an existing TODO', () => {
        cy.visit('todo')
        .get('input')
        .type('new TODO')
        .get('button[type=submit]')
        .click()
        .get('.list-group > .list-group-item')
        .should('exist')
        .get('.list-group > .list-group-item:first > button')
        .click()
        .get('.list-group > .list-group-item')
        .should('not.exist')
    })
})