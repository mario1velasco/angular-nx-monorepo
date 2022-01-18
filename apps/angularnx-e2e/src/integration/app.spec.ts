import { getGreeting, getTitles } from '../support/app.po';

describe('angularnx', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome angularnx');
  });

  it('should display titles', () => {
    getTitles().should((t) => expect(t.length).equal(3));
    // getAddTodoButton().click();
    getTitles().contains('YouTube');
  });
});
