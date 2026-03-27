import {test, expect, Locator, chromium} from '@playwright/test';

test("Playwright Assertion Demo", async()=>
{
    const browser=await chromium.launch();

    const context=await browser.newContext({

        ignoreHTTPSErrors:true
    });

    const page=await context.newPage();

    await page.goto("https://demowebshop.tricentis.com/");

    //Auto-retry assertions (automatically retries intil it passes or times out )
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

    //Auto-retry: waits for the element to be visible and have the expected text

    await expect(page.locator("h2.topic-html-content-header")).toBeVisible();

    await expect(page.locator("div[class='product-grid home-page-product-grid'] strong")).toHaveText('Featured products');

    //2. Non-retrying assertions (executes immediately, no retry)

    const title=await page.title();

    expect(title.includes('Demo Web Shop')).toBeTruthy();     //no auto-retry

    const welcomeText=await page.locator("h2.topic-html-content-header").textContent();

    expect(welcomeText).toContain('Welcome');       //non-retrying


    //3. Negating Matcher 

    //await expect(page.locator("h2.topic-html-content-header")).not.toBeVisible();  //auto -retry

    //expect(welcomeText).not.toContain('Welcome');    //no auto-retry


    await page.waitForTimeout(5000);



});