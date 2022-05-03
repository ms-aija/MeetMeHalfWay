describe('My First Test', function () {
  it('Clicks an element', function () {
    cy.visit('http://localhost:3000/?origin1=&origin2=');
    cy.get('#item1').type('FRA');
    cy.get('#item2').type('CDG');
    cy.contains('Search').click();
  });
  it('adds 3rd origin search box', function () {
    cy.visit('http://localhost:3000/?origin1=&origin2=');
    cy.get('#item1').type('FRA');
    cy.get('#item2').type('CDG');
    cy.contains('+').click();
    cy.get('#item3').type('AMS');
    cy.contains('Search').click();
  });
  it('adds 4th origin search box', function () {
    cy.visit('http://localhost:3000/?origin1=&origin2=');
    cy.get('#item1').type('FRA');
    cy.get('#item2').type('CDG');
    cy.contains('+').click();
    cy.get('#item3').type('AMS');
    cy.contains('+').click();
    cy.get('#item4').type('ATL');
    cy.contains('Search').click();
  });
  it('adds 5th origin search box', function () {
    cy.visit('http://localhost:3000/?origin1=&origin2=');
    cy.get('#item1').type('FRA');
    cy.get('#item2').type('CDG');
    cy.contains('+').click();
    cy.get('#item3').type('AMS');
    cy.contains('+').click();
    cy.get('#item4').type('ATL');
    cy.contains('+').click();
    cy.get('#item5').type('JFK');
    cy.contains('Search').click();
  });
  it('adds 6th origin search box', function () {
    cy.visit('http://localhost:3000/?origin1=&origin2=');
    cy.get('#item1').type('FRA');
    cy.get('#item2').type('CDG');
    cy.contains('+').click();
    cy.get('#item3').type('AMS');
    cy.contains('+').click();
    cy.get('#item4').type('ATL');
    cy.contains('+').click();
    cy.get('#item5').type('JFK');
    cy.contains('+').click();
    cy.get('#item6').type('LGW');
    cy.contains('Search').click();
  });
  it('removes the added origin search boxes', function () {
    cy.visit('http://localhost:3000/?origin1=&origin2=');
    cy.get('#item1').type('FRA');
    cy.get('#item2').type('CDG');
    cy.contains('+').click();
    cy.get('#item3').type('AMS');
    cy.contains('+').click();
    cy.get('#item4').type('ATL');
    cy.contains('+').click();
    cy.get('#item5').type('JFK');
    cy.contains('+').click();
    cy.get('#item6').type('LGW');
    cy.contains('Search').click();
    cy.get('.search-minus').click();
    cy.get('.search-minus').click();
    cy.get('.search-minus').click();
    cy.get('.search-minus').click();
  });
});
