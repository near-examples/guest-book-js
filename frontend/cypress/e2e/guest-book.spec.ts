context("Main Page", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should display the guest book", () => {
        cy.get("h1").should("have.text", "Guest Book");
    });
});