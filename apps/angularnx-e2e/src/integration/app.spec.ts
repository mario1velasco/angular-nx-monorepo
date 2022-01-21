import { getH1, getH2, getImages } from '../support/app.po';

describe('angularnx', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getH1().contains('AWESOME NX');
  });

  it('should display titles', () => {
    getH2().should((t) => expect(t.length).equal(1));
    // getAddTodoButton().click();
    // getImages().contains('YouTube');
  });

  it('should show hola text when click btn', () => {
    cy.get('.my-button').click();
    getH2().should((t) => expect(t.length).equal(2));
    getH2().contains('Bundi Bundi');
  });

  it('example on new test', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.w-full').clear();
    cy.get('.w-full').type('This is a new awesome test');
    cy.get('.btn').click();
    cy.get('.col-span-3 > input-email > container > .container > .relative > #input-email-1').clear();
    cy.get('.col-span-3 > input-email > container > .container > .relative > #input-email-1').type('hello from here');
    cy.get('[labeltext="My label text"] > container > .container > .relative > #input-email-1').clear();
    cy.get('[labeltext="My label text"] > container > .container > .relative > #input-email-1').type('hello');
    cy.get('.animate-pulse').click();
    /* ==== End Cypress Studio ==== */
  });
});
