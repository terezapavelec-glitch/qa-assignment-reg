describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/register");
  });
  
  it("TS_003 Empty submit shows required field errors", () => {});
  it("TS_004 Email is required (blur)", () => {});
  it("TS_015 Page shows correct heading", () => {});
});

const SEL = {
  // Form fields
  registrationForm: '[data-testid="individualRegistrationForm"]',
  heading: '[data-testid="Heading"]',
  firstName: '[data-testid="firstName"]',
  lastName: '[data-testid="lastName"]',
  email: '[data-testid="TextInput"]',
  notice: '[data-testid="Notice"]',
  dialCode: '[data-testid="dialCode"]',
  phone: '[data-testid="phoneNumber"]',
  password: '[data-testid="password"]',
  paragraph: '[data-testid="Paragraph"]',

};

const SUBMIT_IN_FORM = 'button[type="submit"]';
const getForm = () => cy.get(SEL.registrationForm);

it("TS_003 Empty form cannot be submitted (submit disabled)", () => {
  cy.visit("/register");

  getForm()
    .find(SUBMIT_IN_FORM)
    .should("be.disabled");
});

it("TS_004 Email is required (blur)", () => {
  cy.visit("/register");

  getForm().find('input[name="email"]').as("email");

  cy.get("@email").focus().blur();

  cy.get("@email").should("have.attr", "data-state", "error");
  getForm().contains(/required/i).should("be.visible");
});

it('TS_015 Page shows correct heading', () => {
  cy.visit("/register");

  cy.get('[data-testid="Heading"]')
    .contains("Start trading now!")
    .should("be.visible");
});