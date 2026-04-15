describe("TC-006 | View Employee Profile", () => {
    it("Should allow the user to view their employee profile information", () => {
        cy.login("Admin", "admin123");

        cy.goToModule("My Info");
        cy.url().should("include", "/pim/viewPersonalDetails");

        cy.verifyPageTitle("Personal Details");
        cy.get('input[name="firstName"]').should("be.visible");
        cy.get('input[name="lastName"]').should("be.visible");
    });
});