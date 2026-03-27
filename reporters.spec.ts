import{test, expect, Locator} from '@playwright/test';

test.beforeEach('Launching App', async({page})=>{

      await page.goto("https://demowebshop.tricentis.com/");

})


test('Logotest', async({page})=>
{
    await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();
});

test('Title test', async({page})=>
{
     expect(await page.title()).toContain("Demo Web Shop1");
});

test("Search Test", async({page})=>
{
    await page.locator("input#small-searchterms").fill("Laptop"); 
    await page.locator("input[value='Search']").click();
    await expect.soft(page.locator("h2[class='product-title'] a").nth(0)).toContainText("Laptop", {ignoreCase:true});
})