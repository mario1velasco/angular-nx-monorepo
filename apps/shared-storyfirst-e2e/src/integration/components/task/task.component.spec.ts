describe('shared-storyfirst', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=taskcomponent--default&args=title:default;')
  );
  it('should render the component', () => {
    cy.get('bizawaynx-task').should('exist');
  });
});
