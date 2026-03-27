import{test, expect, Locator} from '@playwright/test';

test("Single File Upload",  async({page})=>
{
      await page.goto("https://testautomationpractice.blogspot.com/");

      await page.locator("#singleFileInput").setInputFiles('Uploads/✅ BASIC ARRAY PROGRAMS.pdf');

      await page.locator("//button[text()='Upload Single File']").click();

      const msg=await page.locator('#singleFileStatus').textContent();

      expect(msg).toContain('BASIC ARRAY PROGRAMS.pdf');

      console.log('Upload Sucessfull.............');

      await page.waitForTimeout(5000);
})

test.only("Multiples File Upload",  async({page})=>
{
      await page.goto("https://testautomationpractice.blogspot.com/");

      await page.locator("#multipleFilesInput").setInputFiles(['Uploads/Java notes OOPS.pdf', 'Uploads/✅ BASIC ARRAY PROGRAMS.pdf']);

      await page.locator("//button[text()='Upload Multiple Files']").click();

      const msg1=await page.locator("#multipleFilesStatus").textContent();

      expect(msg1).toContain('✅ BASIC ARRAY PROGRAMS.pdf');

      expect(msg1).toContain('Java notes OOPS.pdf');

      console.log("File Uploaded");

      console.log(msg1);

      await page.waitForTimeout(4000);
})


//Playwright Some Changes

