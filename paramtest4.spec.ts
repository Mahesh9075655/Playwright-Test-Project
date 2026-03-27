import{test, expect, Locator} from '@playwright/test';

import fs from 'fs';

import {parse} from 'csv-parse/sync';

//Reading the Data from CSV File
const csvpath='testdata/data - Sheet1.csv';

//How to read the content from the csv file

const fileContent=fs.readFileSync(csvpath, 'utf-8');

//from the file content grab one 
const records=parse(fileContent, {columns:true, skip_empty_lines:true}) as any ;




test.describe("Login Data Driven test", async()=>
{
   for(const data of records)
   {
         test(`Login test for ${data.email} and ${data.password}`, async({page})=>
       {
              await page.goto("https://demowebshop.tricentis.com/login");

            //Fill Login Form:

              await page.locator("#Email").fill(data.email);

              await page.locator("#Password").fill(data.password);

              await page.locator("input[value='Log in']").click();


           if(data.validity.toLowerCase()==='valid')
          {
              //Assert Logout link is available --indicates succesfull login
         
              const logoutlink= page.getByRole('link', {name:'Log out'});

              await expect(logoutlink).toBeVisible({timeout:5000});

          }

          else
         {
             //Assert Error message is visible

             const errorMessage=page.locator(".validation-summary-errors");

             await expect(errorMessage).toBeVisible({timeout:5000});

            //Assert user is still on the login page

             await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
         }
     })

  }
});
