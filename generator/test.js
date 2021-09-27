const getDataTestIdSelector = dataTestId => `[data-testid="${dataTestId}"]`

const { test, expect } = require('@playwright/test');
const { describe, beforeEach } = test;
const it = test;
const xit = test;

describe('Login', () => {
  beforeEach(async ({ page }) => {
    // console.log('beforeEach do teste');
    await page.goto('https://front.serverest.dev')
  })

  it('shows error message when password is not set', async ({ page }) => {
    // console.log('preenchendo email');
    await page.type(getDataTestIdSelector('email'), 'fulano@qa.com')
    // console.log('preenchendo senha');
    await page.type(getDataTestIdSelector('senha'), 'teste')
    // console.log('clicando entrar');
    await page.click(getDataTestIdSelector('entrar'))
    // console.log('esperando \'logout\'');
    await page.waitForSelector(getDataTestIdSelector('logout'))
  })
})
