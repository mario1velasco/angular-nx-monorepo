describe('shared-storyfirst', () => {
  it('should render the default story', () => {
    cy.visit('/iframe.html?id=tasklistcomponent--default');
    cy.get('bizawaynx-task-list').should('exist');
  });

  it('should render the WithPinnedTasks story', () => {
    cy.visit('/iframe.html?id=tasklistcomponent--with-pinned-tasks');
    cy.get('bizawaynx-task-list').should('exist');
    cy.get('.task-cb').should('be.disabled');
  });

  it('should render the LoadingTasks story', () => {
    cy.visit('/iframe.html?id=tasklistcomponent--loading');
    cy.get('bizawaynx-task-list').should('exist');
    cy.get('.glow-text').contains('Loading');
    cy.get('.glow-text').contains('cool');
    cy.get('.glow-text').contains('state');
    cy.get('.task-cb').should('not.exist');
  });

  it('should render the EmptyTasks story', () => {
    cy.visit('/iframe.html?id=tasklistcomponent--empty');
    cy.get('bizawaynx-task-list').should('exist');
    cy.get('.task-cb').should('not.exist');
    cy.get('.title-message').contains('You have no tasks');
    cy.get('.subtitle-message').contains('Sit back and relax');
  });
});
