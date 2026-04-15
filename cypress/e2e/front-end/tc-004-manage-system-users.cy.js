describe("TC-004 | Manage System Users", () => {
  it("Should allow the administrator to search for an existing system user", () => {
    cy.login("Admin", "admin123");

    cy.goToModule("Admin");
    cy.url().should("include", "/admin");

    cy.get(".oxd-form input").eq(0).type("Admin");
    cy.contains("button", "Search").click();

    cy.get(".oxd-table-body").should("contain", "Admin");
  });
});