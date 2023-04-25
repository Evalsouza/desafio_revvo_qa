/* eslint-disable cypress/no-unnecessary-waiting */

describe('Criar Curso Desafio REvvo QA', () => {
    it('Criar Curso Desafio REvvo QA', () => {
        cy.visit('https://sandbox311.moodledemo.net/login/index.php')
        cy.get('#username').type('admin')
        cy.get('#password').type('sandbox')
        cy.get('#loginbtn').click()
        cy.url().should('be.equal', 'https://sandbox311.moodledemo.net/my/')
        cy.get('#nav-drawer').click
        cy.contains ('span[class="media-body "]', 'Site administration').click()
        cy.wait(7000)
        cy.get('a[href*="#linkcourses"]').contains('Courses').click()
        cy.visit('https://sandbox311.moodledemo.net/course/edit.php?category=0')
        cy.wait(7000)
        cy.get('#id_fullname').click()        
        cy.get('#id_fullname').type('Desafio Revvo QA')
        cy.get('#id_shortname').click()        
        cy.get('#id_shortname').type('Revvo QA')
        cy.get('#id_saveanddisplay').click()        
    });
});