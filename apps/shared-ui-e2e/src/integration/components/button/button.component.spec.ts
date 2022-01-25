describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary&args=className:btn;disabled;'));
  it('should render the component', () => {
    cy.get('Button').should('exist');
  });
});