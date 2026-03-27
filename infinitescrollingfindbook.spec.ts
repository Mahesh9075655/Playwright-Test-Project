import{test, expect, Locator} from '@playwright/test';

test("Infinite Scrolling findbook", async({page})=>
{
    test.slow(); //Set timeout for a single test easy way to triple the default timeout i.e 30 secs (3000 ms);

    await page.goto("https://www.booksbykilo.in/new-books?pricerange=201to500");

    let previousHeight=0;

    let bookFound=false;

    while(true)
    {
       const title= await page.locator("#productsDiv h3").allTextContents();

       if(title.includes('The Mountain Shadow'))
       {
          console.log("Book is found");
          bookFound=true;
          expect(bookFound).toBeTruthy();
          break;
       }

    //Scroll Down the page
     await page.evaluate( ()=>
     {
           window.scrollTo(0, document.body.scrollHeight);
     })

     //Wait for new content to load

     await page.waitForTimeout(3000);

     //Capture the Current height of the page
     const currentHeight= await page.evaluate( ()=>
    {
         return document.body.scrollHeight;
    })

    console.log("Previous Height:", previousHeight);

    console.log("Current Height: ", currentHeight);

    if(currentHeight===previousHeight)
    {
        break;
    }

     previousHeight=currentHeight;
    
    }

    if(!bookFound)
    {
       console.log("Book Not found");
    }
})