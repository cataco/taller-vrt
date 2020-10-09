it('Scrennshots', () => {
    cy.visit('palette.html');
    cy.get('#new').click();
    cy.wait(1000);
    cy.screenshot('image1');
    cy.wait(1000);
    cy.get('#new').click();
    cy.wait(1000);
    cy.screenshot('image2');
});