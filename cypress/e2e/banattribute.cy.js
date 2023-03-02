describe("Ban first attribute", () => {
  it("should ban the first attribute from the ban list and then remove it after", () => {
    cy.visit("http://localhost:5173/");
    // Click on the Discover button
    cy.contains("Discover! 🔀").click();

    // Find the first attribute button and click it
    cy.get(".attributeButton button")
      .eq(0)
      .then(($button) => {
        const attribute = $button.text();
        $button.click();

        // Check that the attribute was added to the ban list
        cy.get(".banContainer button").should("contain", attribute);

        // Click the attribute button again to remove it from the ban list
        cy.get(".banContainer button")
          .should("contain", attribute)
          .first()
          .click();

        // Check that the attribute was removed from the ban list
        cy.get(".banContainer").should("not.contain", attribute);
      });
  });
});

describe("Ban second attribute", () => {
  it("should ban the second attribute from the ban list and then remove the attribute after", () => {
    cy.visit("http://localhost:5173/");

    // Click on the Discover button
    cy.contains("Discover! 🔀").click();

    // Find the second attribute button and click it
    cy.get(".attributeButton button")
      .eq(1)
      .then(($button) => {
        const attribute = $button.text();
        $button.click();

        // Check that the attribute was added to the ban list
        cy.get(".banContainer button").should("contain", attribute);

        // Click the attribute button again to remove it from the ban list
        cy.get(".banContainer button")
          .should("contain", attribute)
          .first()
          .click();

        // Check that the attribute was removed from the ban list
        cy.get(".banContainer").should("not.contain", attribute);
      });
  });
});

describe("Ban third attribute", () => {
  it("should ban the third attribute from the ban list and then remove it after", () => {
    cy.visit("http://localhost:5173/");

    // Click on the Discover button
    cy.contains("Discover! 🔀").click();

    // Find the third attribute button and click it
    cy.get(".attributeButton button")
      .eq(2)
      .then(($button) => {
        const attribute = $button.text();
        $button.click();

        // Check that the attribute was added to the ban list
        cy.get(".banContainer button").should("contain", attribute);

        // Click the attribute button again to remove it from the ban list
        cy.get(".banContainer button")
          .should("contain", attribute)
          .first()
          .click();

        // Check that the attribute was removed from the ban list
        cy.get(".banContainer").should("not.contain", attribute);
      });
  });
});

describe("Ban fourth attribute", () => {
  it("should ban the fourth attribute from the ban list and then remove it after", () => {
    cy.visit("http://localhost:5173/");

    // Click on the Discover button
    cy.contains("Discover! 🔀").click();

    // Find the fourth attribute button and click it
    cy.get(".attributeButton button")
      .eq(3)
      .then(($button) => {
        const attribute = $button.text();
        $button.click();

        // Check that the attribute was added to the ban list
        cy.get(".banContainer button").should("contain", attribute);

        // Click the attribute button again to remove it from the ban list
        cy.get(".banContainer button")
          .should("contain", attribute)
          .first()
          .click();

        // Check that the attribute was removed from the ban list
        cy.get(".banContainer").should("not.contain", attribute);
      });
  });
});
