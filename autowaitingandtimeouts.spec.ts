import {test, expect, Locator, chromium} from '@playwright/test';

test("Autowaiting and Forcing", async()=>
{

    test.setTimeout(60000); //this timeout is applicable for this test only
    const browser=await chromium.launch();

   const context= await browser.newContext(
    {
        ignoreHTTPSErrors:true
    }
   );

   const  page =await context.newPage();
    await page.goto('https://demowebshop.tricentis.com/');

    //Assertions -Auto Wait Works
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/');

    await expect(page.locator('h2.topic-html-content-header')).toBeVisible({timeout:10000});

    //Actions - Auto wait Works
    await page.locator("input#small-searchterms").fill("Laptop", {force:true});  //force action- it will not do actionabiliity check

    await page.locator("//input[@type='submit']").click({force:true});
});

