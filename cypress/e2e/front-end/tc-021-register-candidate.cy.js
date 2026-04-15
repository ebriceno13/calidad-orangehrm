describe("TC-021 | Register Candidate", () => {
    it("Should allow the user to access the candidate registration form", () => {
        cy.login("Admin", "admin123");

        cy.goToModule("Recruitment");
        cy.url().should("include", "/recruitment");

        cy.contains("button", "Add").click();
        cy.url().should("include", "/recruitment/addCandidate");

        cy.verifyPageTitle("Add Candidate");
        cy.get(".oxd-form").should("be.visible");
    });
});