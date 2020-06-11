/// <reference types="cypress" />


describe("sample testsuite", () => {

it("Login Test", () =>{

    cy.visit('https://www.google.com/');
    cy.get('.gLFyf').type('Testing');
    cy.get(':nth-child(5) > .jKWzZXdEJWi__suggestions-inner-container > .sbtc > .sbl1 > span').click();

})

})