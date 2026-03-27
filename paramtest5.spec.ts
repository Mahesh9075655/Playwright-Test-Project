import {test, expect, Locator} from '@playwright/test'; 

import fs from 'fs';

import * as XLSX from 'xlsx';

//Load the xl file
const excelPath='testdata/data.xlsx';

//Read the excel file

//File----> workbook-----> Sheets----->rows & columns
//Loaded excel file
const workbook=XLSX.readFile(excelPath);

const sheetName=workbook.SheetNames[0];

const worksheet=workbook.Sheets[sheetName];

//Convert sheet it into JSON

const loginData:any=XLSX.utils.sheet_to_json(worksheet);




test.describe("Login Data Driven test", async()=>
{
   for(const {email, password, validity} of loginData)
   {
         test(`Login test for ${email} and ${password}`, async({page})=>
       {
              await page.goto("https://demowebshop.tricentis.com/login");

            //Fill Login Form:

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
