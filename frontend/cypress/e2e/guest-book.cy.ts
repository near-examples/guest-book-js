context("Main Page", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should display the guest book", () => {
        cy.get("h1").contains("NEAR Guest Book");
    });
});