describe("Seen So Far", () => {
    it("displays seen drinks correctly", () => {
      // Visit the app
      cy.visit("http://localhost:5173/");

      // Click the "Discover!" button 3 times
      for (let i = 0; i < 3; i++) {
        cy.get("button").contains("Discover!").click();
        cy.wait(1000);
      }
  
      // Check that the "seenContainer" exists and contains the correct amount of elements
      cy.get(".seenContainer").should("exist");
      cy.get(".seenContainer h3").should("have.text", "What have we seen so far?");
      cy.get(".seenContainer h4").should("have.length", 3)
      cy.get(".seenContainer img").should("have.length", 3);
      cy.get(".attributeButton button").should("have.length", 4)
    });
  });