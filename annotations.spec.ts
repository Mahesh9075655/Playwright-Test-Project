import{test, expect, Locator, firefox} from '@playwright/test';

test("Test1", async({page})=>
{
    await page.goto("https://www.google.com/");

    await expect(page).toHaveTitle("Google");


})

test.skip("Test2", async({page})=>
{
    await page.goto("https://www.google.com/");

    await expect(page).toHaveTitle("Google");


})

//skip the test based on certain condtion
test.skip("Test3", async({page, browserName})=>
{
    test.skip(browserName==='chromium', 'condition not matching');
    await page.goto("https://www.google.com/");

    await expect(page).toHaveTitle("Google");


})

test.fail("Test4", async({page, browserName})=>
{
    
    await page.goto("https://www.google.com/");

    await expect(page).toHaveTitle("Google");


})

test.fixme("Test5", async({page, browserName})=>
{
    
    await page.goto("https://www.google.com/");

    


})

test("Test6", async({page, browserName})=>
{
    test.slow();
    
    await page.goto("https://www.google.com/");

    await expect(page).toHaveTitle("Google");


})