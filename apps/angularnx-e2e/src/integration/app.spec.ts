import { getH1, getH2, getImages } from '../support/app.po';

describe('angularnx', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getH1().contains('Amoire');
  });

  it('should display titles', () => {
    getImages().should((t) => expect(t.length).equal(2));
    // getAddTodoButton().click();
    // getImages().contains('YouTube');
  });

  it('should show hola text when click btn', () => {
    cy.get('.my-button').click();
    getH2().contains('Hola hola caracola');
  });

  it('create new transaction', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.btn').click();
    cy.get('#prueba').clear();
    cy.get('#prueba').type('holajsdjasdsadasd');
    /* ==== End Cypress Studio ==== */
  });
});
