describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should be able to visit the page', () => {
    cy.url().should('include', 'localhost:3000');
  });

  it('Should be able to view elements displayed on the page', () => {
    cy.get('nav.nav')
      .find('img.nav-logo')
      .get('nav.nav')
      .find('a.nav-link > li')
      .eq(0)
      .contains('blush')
      .get('section.statement-img-container')
      .find('img.statement-img')
      .get('div.tag-links')
      .find('img')
      .should('have.attr', 'alt');
  });

  it('Should be able to click ', () => {});
});
