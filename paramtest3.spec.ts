import{test, expect, Locator} from '@playwright/test';

import fs from 'fs';  //fs is requored to store file


//Reading data from json

const jsonPath="testdata/data.json";

const loginData:any=JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))   //JSON is predefined class  

test.describe("Login Data Driven test", async ()=>
{
   for(const {email, password, validity} of loginData)
   {

    
         test(`Login test for ${email} and ${password}`, async({page})=>
       {
              await page.goto("https://demowebshop.tricentis.com/login");

            //Fill Login Form

              await page.locator("#Email").fill(email);

              await page.locator("#Password").fill(password);

              await page.locator("input[value='Log in']").click();


           if(validity.toLowerCase()==='valid')
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
