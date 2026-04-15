describe("TC-001 | Login", () => {
    it("Should allow the user to log in successfully with valid credentials", () => {
        cy.login("Admin", "admin123");
        cy.url().should("include", "/dashboard");
        cy.verifyPageTitle("Dashboard");
    });
});