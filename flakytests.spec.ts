import{test, expect, Locator} from '@playwright/test';

test("Tracing", async({page})=>
{
    await page.goto("https://www.demoblaze.com/index.html");

    await page.getByRole('link', {name:'Log in'}).click();

    await page.locator("#loginusername").fill('pavano1');

    await page.locator("#loginpassword").fill("test@123"); //password incorrect

    await page.getByRole('button', {name:'Log in'}).click();

    await page.waitForTimeout(8000);

    await expect(page.getByRole('link', {name:'Log out'})).toBeVisible();

    await expect(page.locator("#nameofuser")).toContainText('Welcome pavano1');

    

   

});