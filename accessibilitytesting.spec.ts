import{test, expect, Locator} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { json } from 'node:stream/consumers';


test("Accessibility test", async({page},testInfo)=>
{
   // await page.goto("https://demowebshop.tricentis.com/");

    await page.goto("https://www.epfindia.gov.in/site_hi/index.php");


    //Scanning the page we can detect the WCAG  (Scanning detect all types of WCAG violations)

    const accessibilityScanResults=await new AxeBuilder({page}).analyze();  //created object

    //console.log("Number of violations", accessibilityScanResults.violations.length);

    //console.log(accessibilityScanResults);

    //expect(accessibilityScanResults.violations).toEqual([]);

    //expect(accessibilityScanResults.violations.length).toEqual(0);


    //How to verify Specific types of violations
     //const accessibilityScanResults=await new AxeBuilder({page}).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();


     //Scanning for few WCAG violations with rules
     //const accessibilityScanResults=await new AxeBuilder({page}).disableRules(['duplicate-id']).analyze();
     await testInfo.attach('accessibility results', {
        body: JSON.stringify(accessibilityScanResults, null,2),
        contentType:'application/json'
    });

     console.log("Number of violations:==========>", accessibilityScanResults.violations.length);

     //console.log(accessibilityScanResults);

     expect(accessibilityScanResults.violations.length).toEqual(0);

})