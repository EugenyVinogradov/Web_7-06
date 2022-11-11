
describe('app spec', () => {

  beforeEach(function() {          
    cy.visit('/');
  });


  it("Should successfully login", () => {
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
   })
   it("Should not login with empty password", () => {
    cy.contains('Log in').click();
    cy.get("#mail").type("test@test.com");
    cy.contains("Submit").click();
    cy.get('#pass').then($el => $el[0].checkValidity()).should('be.false')
   })
   it("Should add book", () => {
    cy.login("test@test.com", "test");
    cy.addBook("BookTitle1", "BookDescription1");
   })
   it("Should add to favorite", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.addBook("BookTitle2", "BookDescription2");
    cy.addToFavorite("BookTitle2");
   })
   it("Should delete from favorite", () => {
    cy.login("test@test.com", "test");
    cy.addBook("BookTitle3", "BookDescription3");
    cy.addToFavorite("BookTitle3");
    cy.deleteFromFavorite("BookTitle3");
   })
   it("Should download from favorite", () => {
    cy.login("test@test.com", "test");
    cy.addBook("BookTitle4", "BookDescription4");
    cy.addToFavorite("BookTitle4");
    cy.contains("BookTitle4").click();
    cy.contains("Dowload book").click();
   })
})