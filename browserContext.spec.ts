import{ test, expect, chromium} from '@playwright/test';


//browser----------->context------->page
test("Browser Settings", async()=>
{
    const browser=await chromium.launch({headless:false});      //it will create the browser

    const context=await browser.newContext(
        {
            viewport:{width:1200, height:800},
            locale:'en-US',            //For English Language
            //proxy:{server:'http://myproxy.com:8888'}
            ignoreHTTPSErrors:true      //for ignore SSL Certification 

        }
    );

    const page=await context.newPage();

    //await page.goto("https://www.google.com/");

    await page.goto("https://expired.badssl.com/");

    console.log("Title of the page", await page.title());

    await page.waitForTimeout(7000);



})