
//Open the App -BeforeAll,  
// Login -beforeEach
// Find Products, Logout, Login, Add Prducts to Cart, Logout, 
// Close App -Afterall
import{test, expect, Locator, Page} from '@playwright/test';

let page: Page;
test.beforeAll('Open App', async({browser})=>
{
     const context=await browser.newContext();
     page=await context.newPage();
     await page.goto("https://www.demoblaze.com/index.html");
})

test.afterAll("Closing the App", async()=>
{
     await page.close();
})

test.beforeEach('Login', async()=>
{
     await page.getByRole('link', {name:'Log in'}).click();

     await page.locator("#loginusername").fill("pavano1");

     await page.locator("#loginpassword").fill("test@123");

     await page.getByRole('button', {name:'Log in'}).click();

     await page.waitForTimeout(3000);
})

test.afterEach('logout', async()=>
{
     await page.locator("#logout2").click();
})

test("No of products", async()=>
{
     const products:Locator=page.locator("h4.card-title");  //product is an locator

     const counts=await products.count();

     console.log("Number of Products counts is", counts);

     await expect(products).toHaveCount(9);
});

test("Add product to Cart", async()=>
{
     await page.locator("//a[contains(text(), 'Samsung galaxy s7')]").click();

    //Handle Alert before click 

    page.once('dialog', async(dialog)=>
   {
      expect(dialog.message()).toContain('Product added');

      await dialog.accept();
   })

   await page.locator("//a[contains(text(),'Add to cart')]").click();
})





