describe ('My first test', () => {
    it ('finds the content "Bright mode"', () => {
        let resumeSite = 'https://marcinkufel.github.io/myResume/';
        cy.visit(resumeSite);
        cy.viewport(1920, 1080);
    })
})



