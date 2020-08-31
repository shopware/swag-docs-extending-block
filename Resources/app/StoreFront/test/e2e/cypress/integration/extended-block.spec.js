// / <reference types="Cypress" />
describe('PluginExtendJsPlugin: Test is extended', () => {

    it('checks for correct alert text', () => {
        cy.visit('/');

        cy.contains('Hello world!').should('be.visible');
    });
});
