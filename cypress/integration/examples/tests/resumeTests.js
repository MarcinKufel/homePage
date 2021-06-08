describe ('My first test', () => {
    it ('finds the content "Bright mode"', () => {
        let resumeSite = 'https://marcinkufel.github.io/myResume/';
        cy.visit(resumeSite);
        cy.viewport(1024, 768);
        cy.get('.js-changeBackground').should('be.visible').click();
    })
})



