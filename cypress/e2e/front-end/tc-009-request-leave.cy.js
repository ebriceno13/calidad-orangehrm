describe("TC-009 | Request Leave", () => {
    it("Should allow the user to access the leave request form", () => {
        cy.login("Admin", "admin123");

        cy.goToModule("Leave");
        cy.url().should("include", "/leave");

        cy.contains("a", "Apply").click();
        cy.url().should("include", "/leave/applyLeave");

        cy.verifyPageTitle("Apply Leave");
        cy.get(".oxd-form").should("be.visible");
    });
});