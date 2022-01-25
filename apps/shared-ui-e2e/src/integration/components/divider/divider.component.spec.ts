describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dividercomponent--primary'));
  it('should render the component', () => {
    cy.get('Divider').should('exist');
  });
});