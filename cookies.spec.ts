import{ test, expect, chromium} from '@playwright/test';
import { validateHeaderValue } from 'node:http';


//browser----------->context------->page
test("Cookies Settings", async()=>
{
    const browser=await chromium.launch({headless:false});      //it will create the browser

    const context=await browser.newContext();

    const page=await context.newPage();

    //await page.goto("https://www.google.com/");

    context.addCookies( [{name:'mycookie', value:'123456', url:'https://testautomationpractice.blogspot.com/'}
                        ]
    );

    console.log("Cookie added........");

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Get the details of cookie by name
     const allthecookies=await context.cookies();     //return all the cookies from the browser including we have added

     const retrivedcookie=allthecookies.find( (c) => c.name==='mycookie');

     console.log("Printing cookie details:", retrivedcookie);

     expect(retrivedcookie?.value).toBe('123456');

     expect(retrivedcookie).toBeDefined();

     //Get all the cookies created by the browser

     console.log("Total number of cookies created:", allthecookies.length);

     expect(allthecookies.length).toBeGreaterThan(0);

     console.log("Printing all the cookies");

     for(const cookie of allthecookies)
    {
        console.log(`${cookie.name}: ${cookie.value}`);
    }

    
    //clear all the cookies

    await context.clearCookies();

    //verfiy the number of cookies

    const allthecookies1=await context.cookies();

    console.log("Number of cookies after clearing:",allthecookies1.length);

    expect(allthecookies1.length).toBe(0);



    console.log("Title of the page", await page.title());

    await page.waitForTimeout(7000);



})