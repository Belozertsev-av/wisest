// https://on.cypress.io/api

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/")
    cy.get("h1").should("contain", "Main")
  })
})
