Cypress.Commands.add("login", (username, password) => {
  cy.visit("/web/index.php/auth/login");
  cy.get('input[name="username"]').should("be.visible").clear().type(username);
  cy.get('input[name="password"]').should("be.visible").clear().type(password, { log: false });
  cy.get('button[type="submit"]').should("be.visible").click();
});

Cypress.Commands.add("goToModule", (moduleName) => {
  cy.contains("span", moduleName).should("be.visible").click();
});

Cypress.Commands.add("verifyPageTitle", (title) => {
  cy.contains("h6", title).should("be.visible");
});