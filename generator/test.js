const getDataTestIdSelector = dataTestId => `[data-testid="${dataTestId}"]`

const { test, expect } = require('@playwright/test');
const { describe, beforeEach } = test;
const it = test;
const xit = test;
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const sleepTimeout = 2*60*1000 / 5; // 2 min to 5 calls

describe('Login', () => {
  beforeEach(async ({ page }) => {
    // console.log('beforeEach do teste');
    await page.goto('https://front.serverest.dev');
    await sleep(sleepTimeout);
  })

  it('shows error message when password is not set', async ({ page }) => {
    // console.log('preenchendo email');
    await page.type(getDataTestIdSelector('email'), 'fulano@qa.com')
    await sleep(sleepTimeout);
    
    // console.log('preenchendo senha');
    await page.type(getDataTestIdSelector('senha'), 'teste');
    await sleep(sleepTimeout);

    // console.log('clicando entrar');
    await page.click(getDataTestIdSelector('entrar'));
    await sleep(sleepTimeout);
  
    // console.log('esperando \'logout\'');
    await page.waitForSelector(getDataTestIdSelector('logout'));
    await sleep(sleepTimeout);
  })
})
