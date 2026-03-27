import{test, expect, Locator} from '@playwright/test';

import fs from 'fs';  //module fs ---->fs represents the file system

test("Downlaod text file", async({page})=>
{
     await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");

     await page.locator("textarea#inputText").fill("Welcome");

      await page.locator("button#generateTxt").click();
      
      const [download]=await Promise.all([page.waitForEvent('download'),page.locator("a#txtDownloadLink").click()])
      //await page.waitForEvent('download');

      //await page.locator("a#txtDownloadLink").click();

      //Save the File in custom paths
      const downloadPaths='Downloads/textFile.txt';

      await download.saveAs(downloadPaths);

       //Check if file exists in the path

       const fileExists:boolean=fs.existsSync(downloadPaths);      //it returns true the file prsent in the folder

       expect(fileExists).toBeTruthy();

       //Cleaup download files
       if(fileExists)
       {
         fs.unlinkSync(downloadPaths);
       }

      await page.waitForTimeout(5000);
})

test.only("Downlaod PDF file", async({page})=>
{
     await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");

     await page.locator("textarea#inputText").fill("Welcome");

      await page.locator("button#generatePdf").click();
      
      const [download]=await Promise.all([page.waitForEvent('download'),page.locator("a#pdfDownloadLink").click()])
      //await page.waitForEvent('download');

      //await page.locator("a#txtDownloadLink").click();

      //Save the File in custom paths
      const downloadPaths='Downloads/textFile.pdf';

      await download.saveAs(downloadPaths);

       //Check if file exists in the path

       const fileExists:boolean=fs.existsSync(downloadPaths);      //it returns true the file prsent in the folder

       expect(fileExists).toBeTruthy();

       //Cleaup download files
       if(fileExists)
       {
         fs.unlinkSync(downloadPaths);
       }

      await page.waitForTimeout(5000);
})