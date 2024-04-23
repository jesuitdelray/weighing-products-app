describe("ProductsSectionPage Component", () => {
    it('should contain an h2 element with the text "Nuts"', () => {
        cy.visit("http://localhost:5173/sections")
        cy.get("h2").contains("Nuts").should("exist")
    })
})
