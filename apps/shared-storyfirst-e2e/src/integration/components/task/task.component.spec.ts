describe('shared-storyfirst', () => {
  // beforeEach(() =>
  // cy.visit('/iframe.html?id=taskcomponent--default&args=title:default;')
  // );
  it('should render the default story', () => {
    cy.visit('/iframe.html?id=taskcomponent--default&args=title:default;');
    cy.get('bizawaynx-task').should('exist');
    cy.get('#task-input').should('have.value', 'Test Task');
  });
  it('should render the pinned story', () => {
    cy.visit('/iframe.html?id=taskcomponent--default&args=title:pinned;');
    cy.get('bizawaynx-task').should('exist');
    cy.get('#task-input').should('have.value', 'Test Task');
  });
  it('should render the archived story', () => {
    cy.visit('/iframe.html?id=taskcomponent--default&args=title:archieved;');
    cy.get('bizawaynx-task').should('exist');
    cy.get('#task-input').should('have.value', 'Test Task');
    cy.get('#task-cb').should('be.disabled');
  });
});
