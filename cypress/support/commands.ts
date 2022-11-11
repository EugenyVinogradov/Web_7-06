/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (login, password) => {
    cy.contains('Log in').click();
    cy.get("#mail").type(login);
    cy.get("#pass").type(password);
    cy.contains("Submit").click();
   })

Cypress.Commands.add("addBook", (tittle, description) => {
    cy.contains('Add new').click();
    cy.contains('Book description');
    cy.get("[placeholder='Enter book title']").type(tittle);
    cy.get("[placeholder='Enter book description']").type(description);
    cy.contains("Submit").click();
    cy.contains("BookTitle");
    })   

Cypress.Commands.add("addToFavorite", (tittle) => {
    cy.contains(tittle).contains("Add to favorite").click();
    cy.contains("Favorites").click();
    cy.contains(tittle);
    })     

Cypress.Commands.add("deleteFromFavorite", (tittle) => {
    cy.contains("Favorites").click();
    cy.contains(tittle).contains("Delete from favorite").click();
    cy.contains(tittle).should('not.exist');
    }) 