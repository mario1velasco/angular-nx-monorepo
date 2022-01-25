describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inputemailcomponent--primary&args=id;placeholder:Write+something;labelText;containerClass;value;'));
  it('should render the component', () => {
    cy.get('Input-email').should('exist');
  });
});