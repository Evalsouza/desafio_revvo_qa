Then(/^Acessar a pagina Dashboard$/, () => {
    cy.url().should('be.equal', 'https://sandbox311.moodledemo.net/my/')
});

Given(/^Acessar "([^"]*)"$/, () => {
    cy.visit('https://sandbox311.moodledemo.net/login/index.php')
});

When(/^Digitar usuário "([^"]*)"$/, () => {
    cy.get('#username').type('admin')
});

When(/^Digitar senha "([^"]*)"$/, () => {
    cy.get('#password').type('sandbox')
});

When(/^Clicar no botão "([^"]*)"$/, () => {
    cy.get('#loginbtn').click()
});

Then(/^Acessar a "([^"]*)"$/, () => {
    cy.url().should('be.equal', 'https://sandbox311.moodledemo.net/my/')
});