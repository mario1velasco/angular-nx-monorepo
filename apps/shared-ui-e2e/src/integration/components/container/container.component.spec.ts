describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=containercomponent--primary&args=className;'));
  it('should render the component', () => {
    cy.get('Container').should('exist');
  });
});