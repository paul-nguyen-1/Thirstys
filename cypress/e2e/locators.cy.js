describe("Locator Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should display the shots motto", () => {
    cy.get(".discoverContainer, h1").contains("Shots! Shots! Shots!");
  });

  it("should display the description under the motto", () => {
    cy.get(".discoverContainer, h2").contains(
      "Discover the best drinks from your wildest dreams."
    );
  });

  it("should display the emojis", () => {
    cy.get(".discoverContainer, p").contains("🍺🍻🍷🍸🍹🥂🥃🍶🍾");
  });

  it("should display if we haven't seen any drinks yet", () => {
    cy.contains("We haven't seen any drinks yet!");
  });

  it("should display what we've seen so far", () => {
    cy.contains("What have we seen so far?");
  });

  it("should display ban list header", () => {
    cy.contains("Ban List");
  });

  it("should display text to tell user to select attributes to ban", () => {
    cy.contains("Select an attribute in your listing to ban it");
  });


  it("should click the discover button", () => {
    cy.contains("Discover! 🔀").click();
  });
});
