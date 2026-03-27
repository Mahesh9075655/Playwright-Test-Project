import{test, expect, Locator} from '@playwright/test';

//testData

const searchItems:string[]=['Laptop', 'Gift Card', 'smartphone', 'monitor'];

//Using for-of loop
/*
for(const item of searchItems)
{
      console.log(item);

      test(`Search test for ${item}`, async({page})=>
     {
       await page.goto("https://demowebshop.tricentis.com/");

       await page.locator("input#small-searchterms").fill(item);

       await page.locator("input[value='Search']").click();

       await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, {ignoreCase:true});
    });


}
*/


//Using For Each Function
/*
searchItems.forEach((item)=>
{
     
    console.log(item);

     test(`Search test for ${item}`, async({page})=>
     {
       await page.goto("https://demowebshop.tricentis.com/");

       await page.locator("input#small-searchterms").fill(item);

       await page.locator("input[value='Search']").click();

       await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, {ignoreCase:true});
    });

});

*/


//describe

test.describe("Searching items", async()=>
{
   
    searchItems.forEach((item)=>
  {
     
    console.log(item);

        test(`Search test for ${item}`, async({page})=>
       {
       await page.goto("https://demowebshop.tricentis.com/");

       await page.locator("input#small-searchterms").fill(item);

       await page.locator("input[value='Search']").click();

       await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, {ignoreCase:true});
       });

  });
})


