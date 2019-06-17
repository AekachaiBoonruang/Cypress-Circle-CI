context('Issue', () => {
  beforeEach(() => {
    cy.visit('http://35.156.252.186/login')
    cy.clearLocalStorage()
    cy.clearCookies()
  })

  it.only('Issue #1343 After update should redirect to swb list', () => {
    cy.reload()
    cy.get('input')
      .eq(0)
      .type('admin@20scoops.com')
    cy.get('input')
      .eq(1)
      .type('admin')
    cy.get('input')
      .eq(1)
      .type('{ENTER}')
    cy.get('#login-btn').click()
    // eslint-disable-next-line cypress/no-unnecessary-waitings
    cy.reload()
    cy.get('.section-header > .title')
    cy.get(':nth-child(6) > :nth-child(1) > .notification').click()
    cy.get('[href="#/setting"] > img').click()
    cy.contains('Mehrwertsteuer-Satz')
    cy.get('.rruAD').click()
    cy.location().should(loc => {
      expect(loc.href).to.eq('http://35.156.252.186/quickwb/#/')
    })
  })

  it.only('Issue #1346 Set default zero', () => {
    cy.reload()
    cy.get('input')
      .eq(0)
      .type('admin@20scoops.com')
    cy.get('input')
      .eq(1)
      .type('admin')
    cy.get('input')
      .eq(1)
      .type('{ENTER}')
    cy.get('#login-btn').click()
    // eslint-disable-next-line cypress/no-unnecessary-waitings
    cy.reload()
    cy.get('.section-header > .title')
    cy.get(':nth-child(6) > :nth-child(1) > .notification').click()
    cy.get('[href="#/setting"] > img').click()
    cy.contains('Mehrwertsteuer-Satz')
    cy.get(
      '.is-half-mobile > .table > tbody > :nth-child(1) > :nth-child(3) > .sc-iwsKbI > .field > .control > .input',
    ).clear()
    cy.get('.rruAD').click()
    cy.location().should(loc => {
      expect(loc.href).to.eq('http://35.156.252.186/quickwb/#/')
    })
  })
})
